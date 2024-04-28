import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeGallery from '../Screens/Gallery/HomeGallery';
import PhotoGallery from '../Screens/Gallery/PhotoGallery';

function GalleryNavigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="HomeGallery"
      screenOptions={{
        headerShown: false,
        // animationEnabled: false,
      }}>
      <Stack.Screen
        name="HomeGallery"
        component={HomeGallery}
        options={{title: 'HomeGallery'}}
      />
      <Stack.Screen
        name="PhotoGallery"
        component={PhotoGallery}
        options={{title: 'PhotoGallery'}}
      />
    </Stack.Navigator>
  );
}

export default GalleryNavigation;
