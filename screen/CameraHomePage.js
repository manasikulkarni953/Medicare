import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { Appbar, Button as PaperButton, Card as PaperCard, Title, Paragraph } from 'react-native-paper';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

function CameraHomePage({ navigation }) {
  const [selectedOption, setSelectedOption] = useState('upload');

  const openCamera = () => {
    navigation.navigate('InfoPage');
  };

  return (
    <ImageBackground source={require('../assets/doctorimg.jpeg')} style={styles.backgroundImage}>
      <Appbar.Header style={styles.appBar}>
      </Appbar.Header>
      <LinearGradient colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']} style={styles.overlay}>
        <PaperCard style={styles.card}>
          <PaperCard.Content style={styles.cardContent}>
            <View style={styles.stethoscopeContainer}>
              <Icon name="stethoscope" size={30} color="#fff" style={styles.medicalTestIcon} />
              <Title style={styles.testHeading}>Select a Medical Test</Title>
            </View>
            <Paragraph style={styles.testDescription}>Choose the test you want to perform</Paragraph>
            <PaperButton mode="outlined" onPress={openCamera} style={styles.testButton}>
           <Icon name="flask" size={18} color="lightyellow" style={styles.buttonIcon} />
          <Text style={styles.buttonText}> Urine Test </Text>
            </PaperButton>
          </PaperCard.Content>
        </PaperCard>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={selectedOption === 'upload' ? styles.uploadButtonSelected : styles.uploadButton}
            onPress={() => setSelectedOption('upload')}
          >
            <Icon name="cloud-upload-alt" size={25} color="#fff" style={styles.uploadButtonIcon} />
            <Text style={styles.uploadButtonText}> Upload Report</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={selectedOption === 'view' ? styles.viewButtonSelected : styles.viewButton}
            onPress={() => {
              setSelectedOption('view');
              navigation.navigate('ReportView');
            }}
          >
            <Icon name="eye" size={25} color="#fff" style={styles.viewButtonIcon} />
            <Text style={styles.viewButtonText}> View Report </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  appBar: {
    backgroundColor: 'transparent',
    marginTop: 10,
  },
  overlay: {
    flex: 2,
    padding: 40,
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
  },
  card: {
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'navy',
    paddingBottom: 40,
    paddingTop: 5,
    padding: 20

  },
  cardContent: {
  alignItems: 'center',
  },
  stethoscopeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  medicalTestIcon: {
    marginRight: 15,
  },
  testHeading: {
    fontSize: 23,
    color: '#fff',
    fontWeight: 'bold',
  },
  testDescription: {
    color: '#ccc',
    fontSize: 17,
    marginBottom: 25,
    textAlign: 'center',
  },
  testButton: {
    borderRadius: 15,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'grey',
    paddingHorizontal: 7,
    paddingVertical: 10,
    backgroundColor: 'blue',
    marginLeft: 10,
  
  },
  buttonText: {
    color: 'white',
    fontSize: 21,
    fontWeight: 'bold',
    marginLeft: 15,
  },
  buttonIcon: {
    marginRight: 20,
     },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  uploadButton: {
    backgroundColor: 'navy',
    borderRadius: 15,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  uploadButtonSelected: {
    backgroundColor: 'navy',
    borderRadius: 15,
    width: '45%',
    paddingVertical: 10,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewButton: {
    backgroundColor: 'navy',
    borderRadius: 15,
    width: '45%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  viewButtonSelected: {
    backgroundColor: 'navy',
    borderRadius: 15,
    width: '45%',
    paddingVertical: 10,
    borderColor: '#fff',
    borderWidth: 2,
    alignItems: 'center',
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  uploadButtonIcon: {
    marginRight: 5,
  },
  viewButtonIcon: {
    marginRight: 5,
  },
});

export default CameraHomePage;
