import React from 'react';
import {View} from 'react-native';
import CameraUI from '../../Components/CameraUI';

function Home(): React.JSX.Element {
  return (
    <View className="flex-1">
      <CameraUI />
    </View>
  );
}

export default Home;
