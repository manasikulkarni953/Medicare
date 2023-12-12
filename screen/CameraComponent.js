import React, { useEffect, useState, useRef } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet, PermissionsAndroid, Alert, Dimensions } from 'react-native'; // Import Alert
import { Camera, useCameraDevices } from 'react-native-vision-camera';

function CameraComponent() {
  const camera = useRef(null);
  const devices = useCameraDevices();
  const device = devices.find((d) => d.position === 'back');
  const [showCamera, setShowCamera] = useState(true);
  const [imageSource, setImageSource] = useState('');
  const [capturedImage, setCapturedImage] = useState(null);
  const [rotationDegrees, setRotationDegrees] = useState(0);

  useEffect(() => {
    checkPermission();
  }, []);

  const checkPermission = async () => {
    try {
      const cameraPermission = PermissionsAndroid.PERMISSIONS.CAMERA;
      const microphonePermission = PermissionsAndroid.PERMISSIONS.RECORD_AUDIO;
      const storagePermission = PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const storageGranted = await PermissionsAndroid.request(storagePermission);
      const cameraGranted = await PermissionsAndroid.request(cameraPermission);
      const microphoneGranted = await PermissionsAndroid.request(microphonePermission);

      if (cameraGranted === PermissionsAndroid.RESULTS.GRANTED && microphoneGranted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Camera Permission: Granted");
        console.log("Microphone Permission: Granted");
      } else {
        console.log("Camera Permission: Denied");
        console.log("Microphone Permission: Denied");

        Alert.alert(
          'Permission Not Granted',
          'You need to grant this app permission to use the camera and record audio',
          [
            {
              text: 'Cancel',
            },
            {
              text: 'Grant',
              onPress: openAppSettings,
            },
          ],
        );
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getRotationDegrees = () => {
    if (device.orientation === 'portrait') {
      if (device.sensorOrientation === 90) {
        return 90;
      }
      return 0;
    } else if (device.orientation === 'landscapeRight') {
      if (device.sensorOrientation === 90) {
        return -90;
      }
      return 90;
    } else if (device.orientation === 'landscapeLeft') {
      if (device.sensorOrientation === 90) {
        return 90;
      }
      return -90;
    }
    return 0;
  };

  const rotateCounterClockwise = () => {
    setRotationDegrees((prevRotation) => prevRotation - 90);
  };

  const resetRotation = () => {
    setRotationDegrees(0);
  };

  const capturePhoto = async () => {
    if (camera.current) {
      try {
        const photo = await camera.current.takePhoto();
        console.log('Captured photo:', photo);
        setImageSource(photo.path);
        setCapturedImage(photo);
        setShowCamera(false);
        resetRotation();
      } catch (captureError) {
        console.error(captureError);
      }
    }
  };

  const retakePhoto = () => {
    // Reset state to allow capturing a new photo
    setImageSource('');
    setCapturedImage(null);
    setShowCamera(true);
  };

  // Replace 'your_api_url_here' with your actual image upload API URL
  const apiUrl = 'your_api_url_here';

  const uploadImage = async () => {
    if (!capturedImage) {
      console.error('No image to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('image', {
      uri: capturedImage.path,
      type: 'image/jpeg',
      name: 'my_image.jpg',
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        console.log('Image upload successful');
      } else {
        console.error('Image upload failed. Server returned:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Image upload error:', error);
    }
  };

  if (!device) {
    return <Text>Camera Not Available</Text>;
  }

  return (
    <View style={styles.container}>
      {showCamera ? (
        <>
          <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={showCamera}
            photo={true}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.camButton} onPress={capturePhoto} />
          </View>
        </>
      ) : (
        <>
          {imageSource !== '' ? (
            <Image
              style={[
                styles.image,
                {
                  transform: [{ rotate: `${getRotationDegrees() + rotationDegrees}deg` }],
                  borderColor: 'black',
                  width: Dimensions.get('window').width,
                  height: Dimensions.get('window').height,
                },
              ]}
              source={{ uri: `file://${imageSource}` }}
            />
          ) : null}

          <View style={styles.buttonContainer}>
            <View style={styles.buttons}>
              <TouchableOpacity style={styles.button} onPress={retakePhoto}>
                <Text style={styles.buttonText}>Retake</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.rotateButton}
                onPress={rotateCounterClockwise}
              >
                <Text style={styles.rotateButtonText}>↺</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={uploadImage}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 7,
  },
  camButton: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: 'black',
  },
  image: {
    ...StyleSheet.absoluteFillObject,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  button: {
    backgroundColor: '#000',
    padding: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  rotateButton: {
    backgroundColor: '#000',
    alignItems: 'center',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    flex: 1,
    width: '50%',
  },
  rotateButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
});

export default CameraComponent;
