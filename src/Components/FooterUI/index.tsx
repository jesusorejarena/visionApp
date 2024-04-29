/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import IconsUI from '../IconsUI';
import TypeCamera from './TypeCamera';
import {useNavigation} from '@react-navigation/native';
import TypeZoom from './TypeZoom';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {positionLastImages} from '../../Utils';

function FooterUI({
  switchPosition,
  switchPositionCamera,
  takePhoto,
  startRecording,
  stopRecording,
  selectZoom,
  changeZoom,
  setIsActive,
}: any): React.JSX.Element {
  const navigation: any = useNavigation();

  const [typeCamera, setTypeCamera] = useState<string>('Camera');
  const [recording, setRecording] = useState(false);
  const [images, setImages] = useState<any>({photos: []});

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
  };

  const stylesButton: any = {
    Camera: 'rounded-full h-16 w-16 bg-white',
    Video: `bg-red-500 ${
      recording ? 'rounded-lg h-10 w-10' : 'rounded-full h-16 w-16'
    }`,
  };

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 3,
      assetType: 'Photos',
    })
      .then(r => {
        setImages({...images, photos: r.edges});
      })
      .catch(err => {
        console.log(err);
        //Error Loading Images
      });
  };

  useEffect(() => {
    getPhotos();
  }, []);

  console.log(images.photos);

  return (
    <View className="absolute bottom-0 w-full z-10 mb-10">
      <View className="mb-2">
        <TypeZoom
          selectZoom={selectZoom}
          changeZoom={changeZoom}
          switchPosition={switchPosition}
        />
      </View>

      <View className={`mb-2 ${recording && 'hidden'}`}>
        <TypeCamera typePosition={(type: string) => setTypeCamera(type)} />
      </View>

      <View className="flex flex-row items-center justify-between px-2">
        <View className="w-1/3 items-center ">
          <View className="flex flex-row justify-center items-center bg-white bottom-7 left-7">
            {!recording && (
              <TouchableOpacity
                className=""
                onPress={() => {
                  setIsActive(false);
                  navigation.navigate('GalleryNavigation');
                }}>
                {images.photos.map((item: any, index: number) => (
                  <View
                    key={index}
                    className={`bg-white border-2 border-white rounded-lg shadow-md absolute overflow-hidden ${positionLastImages[index]}`}>
                    <Image
                      className="w-full h-full rounded-lg"
                      source={{uri: item.node.image.uri}}
                    />
                  </View>
                ))}
              </TouchableOpacity>
            )}
          </View>
        </View>

        <View className="w-1/3 items-center">
          <TouchableOpacity
            onPress={() => {
              onPressTypeCamera[typeCamera];
              getPhotos();
            }}>
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
