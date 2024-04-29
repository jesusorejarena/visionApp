import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from '../Screens/Camera';
import GalleryNavigation from './GalleryNavigation';
import RequestPermission from '../Screens/Extras/RequestPermission';
import usePermissions from '../Hooks/usePermissions';

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  const {hasPermissionCamera, hasPermissionMicrophone} = usePermissions();

  const validateNavigation = hasPermissionCamera && hasPermissionMicrophone;

  return (
    <Stack.Navigator
      initialRouteName={validateNavigation ? 'Camera' : 'RequestPermission'}
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
      <Stack.Screen
        name="RequestPermission"
        component={RequestPermission}
        options={{title: 'RequestPermission'}}
      />
    </Stack.Navigator>
  );
}

export default Navigation;
