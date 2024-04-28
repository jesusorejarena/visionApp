import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import GalleryNavigation from './GalleryNavigation';

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="GalleryNavigation"
      screenOptions={{
        headerShown: false,
        // animationEnabled: false,
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      <Stack.Screen
        name="GalleryNavigation"
        component={GalleryNavigation}
        options={{title: 'GalleryNavigation'}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
