import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registration from './screen/Registration';
import CameraHomePage from './screen/CameraHomePage';
import CameraComponent from './screen/CameraComponent';
import InfoPage from './screen/InfoPage';
import Test from './screen/Test';
import guide from './screen/Guide';
import ForgotPassword from './screen/ForgotPassword';
import HomePage from './screen/HomePage';
import MyDrawer from './screen/HomePage';
import Guide from './screen/Guide';

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
              color: 'white',
            },
            headerStyle: {
              backgroundColor: 'grey',
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
              color: 'white',
            },
            headerStyle: {
              backgroundColor: 'grey',
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
              color: 'white',
            },
            headerStyle: {
              backgroundColor: 'grey',
              height: 50,
            },
          }}
        />
        <Stack.Screen
          name="CameraHomePage"
          component={CameraHomePage}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen
          name="Test"
          component={Test}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="InfoPage"
          component={InfoPage}
          options={{
            headerShown: false,
          }}
        />
                <Stack.Screen
          name="Guide"
          component={Guide}
          options={{
            headerShown: false,
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
              backgroundColor: 'white',
              borderWidth:2
              
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
