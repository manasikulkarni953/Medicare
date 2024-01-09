import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video-controls';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const Test = () => {
  const [languageModalVisible, setLanguageModalVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const navigation = useNavigation(); // Access the navigation object

  const languages = ['English', 'Hindi', 'Marathi'];

  const content = {
    English: {
      heading: 'Unlock all-round Wellness in 4 simple steps',
      warning: 'Do Not Open the pouch containing the test card unless instructed',
      additionalParagraph: 'Before we get to the test, there are a few minor steps that need your attention',
      guideButton: 'Step-by-Step Guide',
    },
    Hindi: {
      heading: '4 सरल कदमों में संपूर्ण स्वास्थ्य को खोलें',
      warning: 'निर्देशित न होने पर टेस्ट कार्ड की पाउच ना खोलें',
      additionalParagraph: 'जब तक हम परीक्षण में पहुंचते हैं, वहां आपको ध्यान देने योग्य कुछ सामान्य कदम हैं',
      guideButton: 'कदम-से-कदम गाइड',
    },
    Marathi: {
      heading: '4 सोप्या कदमांत सर्वक्षेत्रीय स्वास्थ्य सोडा',
      warning: 'निर्देशित नसल्यास टेस्ट कार्डसह पैकेट उघडू नका',
      additionalParagraph: 'परीक्षेत पोहोचन्यापूर्वी, तुमच्याकडून काही सूचना हव्याचे किंवा गोष्टी हव्याची ती किंवा अन्य क्रियांसाठी काही सूचना आहे',
      guideButton: 'कदमांकिंवा-कदम निर्देशिका',
    },
  };

  return (
    <View style={styles.container}>
      {/* Upper part of the screen with linear gradient */}
      <LinearGradient
        colors={['#8E44AD', '#5D3F6A']}
        style={styles.gradientContainer}
      >
        {/* Language selection button */}
        <TouchableOpacity
          style={styles.languageButton}
          onPress={() => setLanguageModalVisible(true)}
        >
          <Text style={[styles.languageButtonText, styles.textWithShadow]}>
            Choose language: {selectedLanguage}
          </Text>
        </TouchableOpacity>

        {/* Heading with language-specific content */}
        <Text style={[styles.headingText, styles.textWithShadow]}>
          {content[selectedLanguage].heading}
        </Text>
      </LinearGradient>

      {/* Warning paragraph in a box with icon */}
      <View style={styles.warningContainer}>
        <View style={styles.warningBox}>
          <Text style={[styles.warningText, styles.textWithShadow]}>
            {content[selectedLanguage].warning}
          </Text>
        </View>
        <Icon
          name="warning"
          size={50}
          color="orange"
          style={styles.icon}
        />
      </View>

      {/* Additional paragraph above the video */}
      <View style={styles.additionalParagraphContainer}>
        <Text style={[styles.additionalParagraphText, styles.textWithShadow]}>
          {content[selectedLanguage].additionalParagraph}
        </Text>
      </View>

      {/* Button for Step-by-Step Guide */}
      <TouchableOpacity
        onPress={() => {
          // Navigate to the guide screen
          navigation.navigate('Guide'); // Replace 'GuideScreen' with the actual name of your guide screen
        }}
        style={[styles.guideButton, styles.textWithShadow]}
      >
        <Text style={styles.guideButtonText}>
          {content[selectedLanguage].guideButton}
        </Text>
      </TouchableOpacity>

      {/* Lower part of the screen */}
      <View style={styles.lowerContainer}>
        {/* Video */}
        <Video
          source={require('../assets/testvdo.mp4')}
          style={styles.video}
        />
      </View>

      {/* Language selection modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={languageModalVisible}
        onRequestClose={() => setLanguageModalVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View
            style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}
          >
            <Text>Select Language</Text>
            <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue) => {
                setSelectedLanguage(itemValue);
                setLanguageModalVisible(false);
              }}
            >
              {languages.map((language, index) => (
                <Picker.Item key={index} label={language} value={language} />
              ))}
            </Picker>
            <TouchableOpacity onPress={() => setLanguageModalVisible(false)}>
              <Text style={{ color: 'blue', marginTop: 10 }}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradientContainer: {
    flex: 0.6,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  languageButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  languageButtonText: {
    color: 'black',
  },
  headingText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'white',
    textAlign: 'auto',
    marginLeft: 20,
    marginRight: 10,
  },
  warningContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    margin: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'purple',
    marginTop: 10,
  },
  warningBox: {
    flex: 1,
    marginLeft: 15,
  },
  warningText: {
    fontSize: 17,
    color: 'purple',
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 10,
  },
  additionalParagraphContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
  },
  additionalParagraphText: {
    fontSize: 18,
    color: 'purple',
    textAlign: 'center',
    fontFamily: 'serif',
    fontStyle: 'normal',
  },
  guideButton: {
    backgroundColor: '#673AB7',
    padding: 15,
    borderRadius: 10,
    margin: 20,
    marginTop: 10,
    alignItems: 'center',
  },
  guideButtonText: {
    color: 'white',
    fontSize: 20,
  },
  lowerContainer: {
    flex: 0.9,
    position: 'relative',
  },
  video: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 40,
  },
  textWithShadow: {
    textShadowColor: 'rgba(100, 200, 150, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});

export default Test;
