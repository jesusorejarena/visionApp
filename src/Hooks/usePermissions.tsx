/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
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

  return {
    hasPermissionCamera,
    hasPermissionMicrophone,
    requestPermissionCamera,
    requestPermissionMicrophone,
  };
};

export default usePermissions;
