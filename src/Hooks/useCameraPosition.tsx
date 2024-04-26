/* eslint-disable curly */
/* eslint-disable react/react-in-jsx-scope */
import {Text} from 'react-native';
import {useCameraDevice} from 'react-native-vision-camera';

const useCameraPosition = () => {
  const device = useCameraDevice('back');

  if (device == null) return <Text className="text-xl">HAS PERMISSION</Text>;

  return {device};
};

export default useCameraPosition;
