import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

const InfoPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#fad899', 'midnightblue']} style={styles.upperHalf}>
        {/* Calling icon */}
        <TouchableOpacity style={styles.callIcon} onPress={() => {/* Add functionality for calling */}}>
          <Icon name="phone" size={30} color="white" />
        </TouchableOpacity>
        <View style={styles.callSupportTextContainer}>
          <Text style={styles.callSupportText}>Need Help? Talk to us</Text>
        </View>
        {/* Profile photo and user text */}
        <View style={styles.profileContainer}>
          <Image source={require('../assets/profile.jpeg')} style={styles.profileIcon} />
          <Text style={styles.userText}>Hello, User</Text>
        </View>

        <View style={styles.textContainer}>
          <Text style={styles.headtext}>Let's Get Started!</Text>
          <View style={styles.parameterRow}>
            <Icon name="heartbeat" size={20} color="navy" style={styles.iconStyle} />
            <Text style={styles.parameter}>Track up to 15 health parameters</Text>
          </View>
          <View style={styles.parameterRow}>
            <Icon name="sticky-note" size={20} color="navy" style={styles.iconStyle} />
            <Text style={styles.result}>Clinically validated results</Text>
          </View>
          <View style={styles.parameterRow}>
            <Icon name="share" color="navy" size={20} style={styles.iconStyle} />
            <Text style={styles.share}>Share your results easily</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.takeTestButton}
          onPress={() => navigation.navigate('Test')}
        >
          <Text style={styles.takeTestButtonText}>Take My First Test</Text>
          <Icon name="angle-right" size={25} color="darkgrey" style={styles.iconTest} />
        </TouchableOpacity>
      </LinearGradient>
      <View style={styles.contentContainer}>
        <Text style={styles.testCardText}>For a test, you'll need to get the</Text>
        <Text style={styles.medicare}>MediCare Test Card</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconColumn}>
            <IconWithText name="child" text="Maternity" color="navy" size={20} />
            <IconWithText name="user" text="Elderly" color="navy" size={20} />
          </View>
          <View style={styles.iconColumn}>
            <IconWithText name="heart" text="Wellness" color="navy" size={20} />
            <IconWithText name="flask" text="Bladder" color="navy" size={20} />
          </View>
        </View>
        <TouchableOpacity
          style={styles.touchableButton}
          onPress={() => navigation.navigate('CameraComponent')}
        >
          <Text style={styles.touchableButtonText}>Get My Test Card</Text>
          <Icon name="angle-right" size={25} color="darkgrey" style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const IconWithText = ({ name, text, color, size, style }) => (
  <View style={[styles.iconWithTextContainer, style]}>
    <View style={styles.iconBackground}>
      <Icon name={name} size={size} color={color} />
    </View>
    <Text style={styles.iconText}>{text}</Text>
  </View>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  upperHalf: {
    flex: 1,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    padding: 10,
  },
  contentContainer: {
    width: '70%',
    paddingTop: 20,
    alignSelf: 'auto',
    marginLeft: 20,
  },
  iconsContainer: {
    flexDirection: 'row-reverse',
    marginTop: 10,
  },
  iconColumn: {
    flex: 1,
    padding: 15,
  },
  touchableButton: {
    backgroundColor: 'white',
    padding: 12,
    paddingRight: 20,
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    borderColor: 'navy',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touchableButtonText: {
    color: 'navy',
    fontSize: 19,
    fontWeight: 'bold',
  },
  iconWithTextContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: 'black',
    fontSize: 14,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  iconStyle: {
    alignSelf: 'auto',
    marginLeft: 20,
  },
  takeTestButton: {
    backgroundColor: 'navy',
    padding: 13,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: 30,
    marginRight: 30,
  },
  iconTest: {
    marginLeft: 10,
    color: 'white',
  },
  takeTestButtonText: {
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold',
    
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 7,
    marginTop: 15,
  },
  profileIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    },
  userText: {
    color: 'indigo',
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  callIcon: {
    position: 'absolute',
    top: 10,
    right: 30,
    backgroundColor: 'indigo',
    padding: 10,
    borderRadius: 20,
    width: 60,
  },
  callSupportTextContainer: {
    position: 'absolute',
    top: 63,
    right: 5,
    alignItems: 'flex-end',
  },
  callSupportText: {
    color: 'black',
    fontSize: 13,
    fontWeight: '600',
  },
  headtext: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'auto',
    marginTop: 40,
    marginLeft: 40,
    marginBottom: 20,
  },
  parameterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  parameter: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  result: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  share: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  testCardText: {
    color: 'black',
    fontSize: 17,
    textAlign: 'auto',
  },
  medicare: {
    fontSize: 20,
    fontWeight: '600',
  },
});

export default InfoPage;
