import React from 'react';
import {Text, View} from 'react-native';
// import LottieView from 'lottie-react-native';

export default function SplashScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="items-center justify-center">
        {/* <LottieView
          source={require('../../assets/animation/loadingDots.json')}
          autoPlay
          loop
        /> */}
        <Text>Loading</Text>
      </View>
    </View>
  );
}
