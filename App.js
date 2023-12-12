import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registration from './screen/Registration';
import CameraHomePage from './screen/CameraHomePage';
import CameraComponent from './screen/CameraComponent';
import InfoPage from './screen/InfoPage';
import Test from './screen/Test';
import ForgotPassword from './screen/ForgotPassword';
import HomePage from './screen/HomePage';
import MyDrawer from './screen/HomePage';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: 'Login',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white', // Set text color to white
            },
            headerStyle: {
              backgroundColor: 'grey', // Set background color to black
              height: 50,
            },
          }}
        />
        <Stack.Screen
          name="Registration"
          component={Registration}
          options={{
            title: 'Registration',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white', // Set text color to white
            },
            headerStyle: {
              backgroundColor: 'grey', // Set background color to black
              height: 50,
            },
          }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{
            title: 'Forgot Password',
            headerTitleStyle: {
              fontSize: 20,
              color: 'white', // Set text color to white
            },
            headerStyle: {
              backgroundColor: 'grey', // Set background color to black
              height: 50,
            },
          }}
        />
        <Stack.Screen
          name="CameraHomePage"
          component={CameraHomePage}
          options={{
            title: 'Medicare',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerStyle: {
              height: 30,
              padding: 10,
            },
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            headerShown:false,
           
          }}
        />
         <Stack.Screen
          name="InfoPage"
          component={InfoPage}
          options={{
            headerShown: false, // Hide the header completely
          }}
        />
        <Stack.Screen
          name="CameraComponent"
          component={CameraComponent}
          options={{
            title: 'Medicare',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerStyle: {
              height: 50,
            },
          }}
        />
        
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{
            title: 'Medicare',
            headerTitleStyle: {
              fontSize: 20,
            },
            headerStyle: {
              height: 50,
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
