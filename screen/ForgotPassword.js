import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ForgotPassword = () => {
  const [UserName, setUserName] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const passwordHandle = async () => {
    try {
      const response = await axios.post('http://192.168.155.98/api/ForgotPassword/ResetPassword', {
        UserName,
        NewPassword,
      });

      if (response.status === 200) {
        setMessage("Password change Successful");
        navigation.navigate('Login');
      } else if (response.status === 400) {
        setMessage("Invalid Username, Please enter a valid UserName");
      }
    } catch (error) {
      console.error("An error occurred:", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Forgot Password !!</Text>
        </View>

        <View style={styles.wrapper}>
          <Text style={styles.subheader}>Recover password</Text>

          <View style={styles.main}>
            <TextInput
              placeholder="Enter Your Username"
              style={styles.input}
              value={UserName}
              onChangeText={(text) => setUserName(text)}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={styles.passwordInput}
                value={NewPassword}
                onChangeText={(text) => setNewPassword(text)}
              />
              <View style={styles.eye}>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <Button title="Create Password" onPress={passwordHandle} />
            </View>

            {message && (
              <Text style={message.includes("Successful") ? styles.successMessage : styles.errorMessage}>
                {message}
              </Text>
            )}
          </View>
        </View>
      </BackgroundImage>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F5F6",
  },
  headerContainer: {
    alignItems: "center",
    marginTop: 40,
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#040D12",
  },
  wrapper: {
    flex: 1,
    backgroundColor: "#F9F5F6",
    paddingVertical: 50,
    paddingHorizontal: 55,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 90,
  },
  subheader: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 45,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderRadius: 50,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    borderBottomWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    marginVertical: 15,
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  eye: {
    paddingHorizontal: 15,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  successMessage: {
    color: "green",
    textAlign: "center",
  },
  errorMessage: {
    color: "red",
    textAlign: "center",
  },
});

export default ForgotPassword;
