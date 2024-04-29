/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import usePermissions from '../../Hooks/usePermissions';
import {useNavigation} from '@react-navigation/native';
import AcceptRequest from '../../Assets/Images/accept-request.svg';
import {openSettings} from 'react-native-permissions';

export default function RequestPermission() {
  const navigation: any = useNavigation();

  const {
    hasPermissionCamera,
    hasPermissionMicrophone,
    requestPermissionCamera,
    requestPermissionMicrophone,
  } = usePermissions();

  const requestPermissions = () => {
    requestPermissionCamera();
    requestPermissionMicrophone();
  };

  useEffect(() => {
    if (hasPermissionCamera && hasPermissionMicrophone) {
      navigation.navigate('Camera');
    } else {
      requestPermissions();
    }
  }, [hasPermissionCamera, hasPermissionMicrophone]);

  return (
    <View className="flex-1 bg-gray-900">
      <View className="flex-1 flex items-center justify-center">
        <AcceptRequest width={200} height={200} />
        <TouchableOpacity
          className="bg-black rounded-lg px-4 py-3 mt-5"
          onPress={() => openSettings()}>
          <Text className="text-xl text-white">Request permissions...</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
