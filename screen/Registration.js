import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, ScrollView, TouchableOpacity } from "react-native";
import BackgroundImage from "../components/BackgroundImage";
import axios from 'axios';
import { useNavigation, Link } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomePage from "./HomePage";

const Registration = () => {
  const navigation = useNavigation();

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [UserName, setUserName] = useState('');

  const [empty, setEmpty] = useState(false);
  const [success, setSuccess] = useState(false);

  // for password visibility 
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (empty) {
      const timeout = setTimeout(() => {
        setEmpty(false);
      }, 3000);
      return () => clearTimeout(timeout); // Clear the timeout when unmounting
    }
  }, [empty]);

  const SubmitHandle = async () => {
    if (FirstName === "" || LastName === "" || Password === "" || Email === "" || UserName === "") {
      setEmpty(true);
    } else {
      try {
        const response = await axios.post('http://192.168.155.98/api/SignUpAndLogin/SignUp',
          {
            FirstName,
            LastName,
            Email,
            UserName,
            Password
          });

        if (response.status === 200) {
          setSuccess(true);
          setTimeout(() => {
            navigation.navigate('HomePage');
          }, 1000);
          console.log("moving to homepage",HomePage)
        }
      } catch (error) {
        console.error("An error occurred:", error);
        setSuccess(false);
      }
    }
  }

  return (
    <>
      <BackgroundImage>
        <View style={styles.Header}>
          <Text style={{ fontSize: 50, fontWeight: 800, color: '#040D12' }}> Register here !! </Text>
        </View>

        <View style={styles.wrapper}>
          <Text style={{ textAlign: "center", fontSize: 25, fontWeight: 500, marginBottom: 20 }}> Enter Your Details !!</Text>

          {success && (<Text style={{ color: 'green', fontSize: 20, fontWeight: 500 }}> Registration successful</Text>)}

          <ScrollView style={styles.main}>
            <TextInput
              placeholder="First Name"
              style={styles.input}
              value={FirstName}
              onChangeText={(text) => setFirstName(text)}
            />
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              value={LastName}
              onChangeText={(text) => setLastName(text)}
            />

            <TextInput
              placeholder="E-mail"
              style={styles.input}
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />

            <TextInput
              placeholder="UserName"
              style={styles.input}
              value={UserName}
              onChangeText={(text) => setUserName(text)}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={styles.passwordInput}
                value={Password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={styles.eye}>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Button
                title="Submit"
                onPress={SubmitHandle}
              />

              {empty && (<Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}> Please Fill All The Fields </Text>)}

            </View>

            <Text style={{ textAlign: "center" }}> Already Have an Account <Link to={{ screen: "Login" }} style={{ color: "blue" }}> Sign In </Link></Text>
          </ScrollView>
        </View>
      </BackgroundImage>
    </>
  )
}

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    width: 400,
    marginVertical: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    width: "100%",
    height: 700,
    backgroundColor: "#F9F5F6",
    paddingVertical: 20,
    paddingHorizontal: 55,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 90,
  },
  main: {
    flexGrow: 1,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderRadius: 20,
    marginVertical: 15
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    borderBottomWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
    marginVertical: 15
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 15,
  },
  eye: {
    paddingHorizontal: 15
  },
});

export default Registration;
