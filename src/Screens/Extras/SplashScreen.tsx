/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-gray-900">
      <View className="flex-1 flex items-center justify-center">
        <LottieView
          style={{
            width: 100,
            height: 100,
          }}
          source={require('../../Assets/Animations/loading.json')}
          autoPlay
          loop
        />
        <Text className="text-xl text-purple-500 font-bold mt-5">
          Loading...
        </Text>
      </View>
      <View className="flex items-center mb-4">
        <Text className="text-base text-purple-500 font-bold mt-5">
          Jesus Orejarena - Vision Camera App
        </Text>
        <Text className="text-xs text-purple-500 font-bold mt-1">v1.0</Text>
      </View>
    </View>
  );
}
