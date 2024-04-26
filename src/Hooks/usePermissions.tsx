/* eslint-disable curly */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {Text} from 'react-native';
import {
  useCameraPermission,
  useMicrophonePermission,
} from 'react-native-vision-camera';

const usePermissions = () => {
  const {
    hasPermission: hasPermissionCamera,
    requestPermission: requestPermissionCamera,
  } = useCameraPermission();
  const {
    hasPermission: hasPermissionMicrophone,
    requestPermission: requestPermissionMicrophone,
  } = useMicrophonePermission();

  useEffect(() => {
    if (!hasPermissionCamera) {
      requestPermissionCamera();
    }

    if (!hasPermissionMicrophone) {
      requestPermissionMicrophone();
    }
  }, []);

  if (!hasPermissionCamera)
    return <Text className="text-xl">HAS PERMISSION</Text>;

  if (!hasPermissionMicrophone)
    return <Text className="text-xl">HAS PERMISSION</Text>;
};

export default usePermissions;
