import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Import the LinearGradient component
import Icon from 'react-native-vector-icons/FontAwesome5';
import { NavigationContainer } from '@react-navigation/native';

function CameraHomePage({ navigation }) {
  const [selectedOption, setSelectedOption] = React.useState('upload');

  const openCamera = () => {
    navigation.navigate('InfoPage');
  };

  return (
    <ImageBackground source={require('../assets/doctorimg.jpeg')} style={styles.backgroundImage}>
      <View style={styles.header}></View>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Use LinearGradient for the overlay with linear background */}
        <LinearGradient
          colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']} // Define your linear gradient colors here
          style={styles.overlay}
        >
          <View style={styles.testSelection}>
            <Icon name="stethoscope" size={27} color="lightyellow" style={styles.medicalTestIcon} />
            <Text style={styles.testHeading}>Choose The Test</Text>
          </View>
          <TouchableOpacity style={styles.testButton} onPress={openCamera}>
            <View style={styles.buttonContent}>
              <Icon name="flask" size={24} color="lightyellow" style={styles.buttonIcon} />
              <Text style={styles.buttonText}>Urine Test</Text>
            </View>
            <Icon name="check-circle" size={20} color="lightyellow" style={styles.testIcon} />
          </TouchableOpacity>
          <View style={styles.uploadView}>
            <TouchableOpacity
              style={selectedOption === 'upload' ? styles.uploadButtonSelected : styles.uploadButton}
              onPress={() => setSelectedOption('upload')}
            >
              <Icon name="cloud-upload-alt" size={25} color="navy" style={styles.uploadButtonIcon} />
              <Text style={styles.uploadButtonText}>Upload</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={selectedOption === 'view' ? styles.viewButtonSelected : styles.viewButton}
              onPress={() => {
                setSelectedOption('view');
                navigation.navigate('ReportView'); // Navigate to the ReportView screen
              }}
            >
              <Icon name="eye" size={25} color="navy" style={styles.viewButtonIcon} />
              <Text style={styles.viewButtonText}>View Report</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backgroundImage: {
     width: '100%',
    height: '100%',
    opacity: 0.9,
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
  overlay: {
    flex: 2,
    backgroundColor: 'navy',
    padding:25,
    marginTop:100,
    borderTopLeftRadius: 60,  // Set the top-left border radius
    borderTopRightRadius: 60,
  },
  testSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  medicalTestIcon: {
    marginRight: 15,
    marginTop: 0,
  },
  testHeading: {
    fontSize: 25,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.6)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  testButton: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 50,
    marginVertical: 50,
   padding: 10,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor:'transparent',
    borderWidth:2,
    borderColor:'white'
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonIcon: {
    marginRight: 30,
    marginLeft:5
  },
  buttonText: {
    color: 'lightyellow',
    fontSize: 24,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  testIcon: {
    marginLeft: 'auto',
    marginRight: 19,
  },
  uploadView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  uploadButton: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: '40%',
    padding: 12,
    alignItems: 'center',
  },
  uploadButtonSelected: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: '40%',
    padding: 8,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: 'navy',
    fontSize: 15,
    fontWeight: 'bold',
  },
  viewButton: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: '40%',
    padding: 8,
    alignItems: 'center',
  },
  viewButtonSelected: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
    width: '40%',
    padding: 5,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
  },
  viewButtonText: {
    color: 'navy',
    fontSize: 15,
    fontWeight: 'bold',
  },
  uploadButtonIcon: {
    marginRight: 5,
  },
  viewButtonIcon: {
    marginRight: 5,
  },
});

export default CameraHomePage;
