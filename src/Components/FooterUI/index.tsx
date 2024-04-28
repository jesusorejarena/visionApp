import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconsUI from '../IconsUI';
import TypeCamera from './TypeCamera';
import {useNavigation} from '@react-navigation/native';

function FooterUI({
  switchPositionCamera,
  takePhoto,
  startRecording,
  stopRecording,
}: any): React.JSX.Element {
  const navigation: any = useNavigation();

  const [typeCamera, setTypeCamera] = useState<string>('Camera');
  const [recording, setRecording] = useState(false);

  const onPressRecording = () => {
    if (typeCamera === 'Video') {
      if (!recording) {
        startRecording();
        setRecording(true);
      } else {
        stopRecording();
        setRecording(false);
      }
    }
  };

  const onPressTypeCamera: any = {
    Camera: () => takePhoto(),
    Video: () => onPressRecording(),
    Panoramica: () => takePhoto(),
  };

  const stylesButton: any = {
    Camera: 'rounded-full h-16 w-16 bg-white',
    Video: `bg-red-500 ${
      recording ? 'rounded-lg h-10 w-10' : 'rounded-full h-16 w-16'
    }`,
  };

  return (
    <View className="absolute bottom-0 w-full z-10 mb-10">
      {!recording && (
        <View className="mb-2">
          <TypeCamera
            typeCameraPosition={(type: string) => setTypeCamera(type)}
          />
        </View>
      )}

      <View className="flex flex-row items-center justify-between px-2">
        <View className="w-1/3 items-center">
          {!recording && (
            <TouchableOpacity
              onPress={() => navigation.navigate('GalleryNavigation')}>
              <IconsUI
                collection="MaterialIcons"
                icon="image"
                size="32"
                color="#fff"
              />
            </TouchableOpacity>
          )}
        </View>

        <View className="w-1/3 items-center">
          <TouchableOpacity onPress={onPressTypeCamera[typeCamera]}>
            <View className="rounded-full z-10 h-20 w-20 bg-gray-300 flex flex-col justify-center items-center">
              <View className={`z-20 ${stylesButton[typeCamera]}`} />
            </View>
          </TouchableOpacity>
        </View>

        <View className="w-1/3 items-center">
          <TouchableOpacity onPress={switchPositionCamera}>
            <IconsUI
              collection="MaterialIcons"
              icon="flip-camera-ios"
              size="32"
              color="#fff"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FooterUI;
