import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5
import { storeUserCredentials } from '../components/SessionHandling'; // Correct the import statement
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from '@react-navigation/native';
const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [failed, setFailed] = useState(false);
  const navigation = useNavigation();

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  useEffect(() => {
    if (failed) {
      const timeout = setTimeout(() => {
        setFailed(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [failed]);

  const loginHandle = async () => {
    try {
      const token = 'token';
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      };

      const response = await axios.post('https://backendall.rb-actionaction.repl.co/api/login', {
        username,
        password,
      });

      console.log(response.data);

      const userProfileData = {
        firstName: 'balaji',
        lastName: 'borude',
        username: 'balaji123',
        email: 'balajiemail',
      };

      const userProfile = JSON.stringify(userProfileData)
      AsyncStorage.setItem('ProfileKey', userProfile);

      console.log(userProfile)

      if (response.status === 200) {
        setFailed(false);
        const token = 'token';
        storeUserCredentials(token);
        navigation.navigate('HomePage');
      }
    } catch (error) {
      console.log('error:', error);
      setFailed(true);
    }
  };

  const RegistrationHandle = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View>
      <BackgroundImage>
        <View style={styles.Header}>
          <Text style={{ fontSize: 65, fontWeight: 'bold', color: '#424242' }}> Login </Text>
        </View>

        <View style={styles.wrapper}>
          <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginBottom: 45 }}>
            Welcome Back !!
          </Text>

          <View style={styles.main}>
            <TextInput
              placeholder="Username"
              style={styles.input}
              value={username}
              onChangeText={(text) => setUserName(text)}
            />

            <View style={styles.passwordInputContainer}>
              <TextInput
                placeholder="Password"
                secureTextEntry={!passwordVisible}
                style={styles.passwordInput}
                value={password}
                onChangeText={(text) => setPassword(text)}
              />
              <View style={styles.eye}>
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Icon name={passwordVisible ? 'eye' : 'eye-slash'} size={20} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ marginVertical: 10 }}>
              <Button title="Sign In" onPress={loginHandle} />
              {failed && <Text style={styles.errorText}>Please Enter a valid Email or Password</Text>}
            </View>
            <TouchableOpacity>
                  <Link to={{ screen: 'HomePage' }}>Shortcut to Open HomePage  </Link>
                </TouchableOpacity>

            <Button title="Create Account" onPress={() => RegistrationHandle('Registration')} />
          </View>
        </View>
      </BackgroundImage>
    
     
    </View>
  );
};

const styles = StyleSheet.create({
  Header: {
    flex: 1,
    width: 400,
    marginVertical: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F9F5F6',
    paddingVertical: 50,
    paddingHorizontal: 55,
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    gap: 30,
  },
  input: {
    fontSize: 20,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderRadius: 20,
    width: 280,
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    textAlign: 'center',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 280,
    borderBottomWidth: 1,
    borderRadius: 20,
    marginBottom: 5,
  },
  passwordInput: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 15,
  },
  eye: {
    paddingHorizontal: 15,
  },
  cameraButton: {
    backgroundColor: 'blue', 
    padding: 10,
    borderRadius: 20,
    marginTop: 250,
    alignItems: 'center',


  },
  cameraButtonText: {
    color: 'white', // Customize the button text's appearance
    fontSize: 18,
  },
});

export default Login;
