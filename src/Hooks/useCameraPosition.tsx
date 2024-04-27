/* eslint-disable curly */
/* eslint-disable react/react-in-jsx-scope */
import {useState} from 'react';
import {Text} from 'react-native';
import {useCameraDevice} from 'react-native-vision-camera';

const useCameraPosition = () => {
  const [switchPosition, setSwitchPosition] = useState(false);

  const device = useCameraDevice(switchPosition ? 'front' : 'back');

  if (device == null) return <Text className="text-xl">HAS PERMISSION</Text>;

  const switchPositionCamera = () => setSwitchPosition(!switchPosition);

  return {
    device,
    switchPositionCamera,
    switchPosition: switchPosition ? 'front' : 'back',
  };
};

export default useCameraPosition;
