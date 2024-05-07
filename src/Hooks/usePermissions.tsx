/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from 'react';
import {
  useCameraPermission,
  useLocationPermission,
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
  const {
    hasPermission: hasPermissionLocation,
    requestPermission: requestPermissionLocation,
  } = useLocationPermission();

  useEffect(() => {
    if (!hasPermissionCamera) {
      requestPermissionCamera();
    }

    if (!hasPermissionMicrophone) {
      requestPermissionMicrophone();
    }

    if (!hasPermissionLocation) {
      requestPermissionLocation();
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
