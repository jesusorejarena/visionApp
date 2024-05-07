import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Camera from '../Screens/Camera';
import GalleryNavigation from './GalleryNavigation';
import RequestPermission from '../Screens/Extras/RequestPermission';
import usePermissions from '../Hooks/usePermissions';
import UploadImages from '../Screens/UploadImages';

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  const {hasPermissionCamera, hasPermissionMicrophone} = usePermissions();

  const validateNavigation = hasPermissionCamera && hasPermissionMicrophone;

  return (
    <Stack.Navigator
      // initialRouteName={validateNavigation ? 'Camera' : 'RequestPermission'}
      initialRouteName={'UploadImages'}
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
        name="UploadImages"
        component={UploadImages}
        options={{title: 'Upload Images', headerShown: true}}
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
