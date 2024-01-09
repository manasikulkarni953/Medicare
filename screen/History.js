import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, PermissionsAndroid } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';

const History = () => {
  const [pastedURL, setPastedURL] = useState('');

  useEffect(() => {

  }, [pastedURL]);

  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: 'Downloader App Storage Permission',
          message: 'Downloader App needs access to your storage so you can download files',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        downloadFile();
      } else {
        console.log('STORAGE permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const downloadFile = () => {
    const date = new Date();
    const { config, fs } = RNFetchBlob;
    const fileDir = fs.dirs.DownloadDir;
    config({
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path: fileDir + '/download_' + Math.floor(date.getDate() + date.getSeconds() / 2) + '.pdf',
        description: 'file download',
      },
    })
      .fetch('GET', pastedURL, {
        //some headers ..
      })
      .then((res) => {
        // the temp file path
        console.log('The file saved to ', res.path());
        alert('File downloaded successfully');
        // Refresh the page by updating the state
        setPastedURL('');
      });
  };

  return (
    <LinearGradient colors={['indigo', 'transparent']} style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 30 }}>
        <TextInput
          placeholder="Enter URL"
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            alignSelf: 'center',
            padding: 15,
            borderRadius: 15,
            backgroundColor: 'rgba(255, 255, 255, 0.7)', // Transparent white background
          }}
          value={pastedURL}
          onChangeText={(txt) => setPastedURL(txt)}
        />
        <TouchableOpacity
          style={{
            width: '90%',
            height: 50,
            borderWidth: 1,
            alignSelf: 'center',
            borderRadius: 10,
            marginTop: 30,
            backgroundColor: 'indigo',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            if (pastedURL !== '') {
              requestStoragePermission();
            } else {
              alert('Please Add URL');
            }
          }}
        >
          <Text style={{ color: '#fff', fontSize: 20 }}>Download file</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default History;
