import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeGallery from '../Screens/Gallery/HomeGallery';
import PhotoGallery from '../Screens/Gallery/PhotoGallery';

function GalleryNavigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="HomeGallery">
      <Stack.Screen
        name="HomeGallery"
        component={HomeGallery}
        options={{title: 'Gallery'}}
      />
      <Stack.Screen
        name="PhotoGallery"
        component={PhotoGallery}
        options={{title: 'PhotoGallery', headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default GalleryNavigation;
