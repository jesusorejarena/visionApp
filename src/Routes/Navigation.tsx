import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from '../Screens/Camera';
import GalleryNavigation from './GalleryNavigation';

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Camera"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{title: 'Camera'}}
      />
      <Stack.Screen
        name="GalleryNavigation"
        component={GalleryNavigation}
        options={{title: 'Gallery'}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
