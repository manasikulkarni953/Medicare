import React from 'react';
import 'react-native-gesture-handler';
import Profile from './Profile';
import History from './History';
import CameraHomePage from './CameraHomePage';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="CameraHomePage">
      <Drawer.Screen name="CameraHomePage" component={CameraHomePage} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="History" component={History} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
