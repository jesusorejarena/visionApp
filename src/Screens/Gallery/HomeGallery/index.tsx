/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  VirtualizedList,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';

const {height} = Dimensions.get('window');

function HomeGallery(): React.JSX.Element {
  const {navigate}: any = useNavigation();

  const [images, setImages] = useState<any>({photos: []});

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 202,
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

  return (
    <View className="flex-1 bg-black">
      <View className="flex-1 flex-row flex-wrap justify-start bg-green">
        {/* <FlatList
          className="py-3"
          data={images.photos}
          renderItem={({item, index}: any) => (
            <TouchableWithoutFeedback
              className="flex-1"
              key={index}
              onPress={() => navigate('PhotoGallery', {index, images})}>
              <Image
                source={{uri: item.node.image.uri}}
                style={{
                  width: '25%',
                  height: (height / 100) * 12,
                }}
                className="border"
              />
            </TouchableWithoutFeedback>
          )}
          pagingEnabled
          // snapToAlignment="center"
          keyExtractor={(item, index) => index.toString()}
          decelerationRate={0}
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        /> */}

        <VirtualizedList
          className="flex flex-row flex-wrap bg-yellow-400"
          data={images.photos}
          renderItem={({item, index}) => (
            <TouchableWithoutFeedback
              className="w-full"
              key={index}
              onPress={() => navigate('PhotoGallery', {index, images})}>
              <Image
                source={{uri: item.node.image.uri}}
                style={{
                  width: '25%',
                  height: (height / 100) * 12,
                }}
                className="border"
              />
            </TouchableWithoutFeedback>
          )}
          getItem={(data, index) => data[index]}
          getItemCount={data => data.length}
          keyExtractor={(item, index) => index.toString()}
          pagingEnabled={true}
          // snapToAlignment="center"
          decelerationRate="fast" // Usar "fast" o "normal" según prefieras
          scrollEventThrottle={16}
          showsHorizontalScrollIndicator={false}
        />

        {/* {images.photos.map((item: any, index: number) => (
          <TouchableWithoutFeedback
            className="flex-1"
            key={index}
            onPress={() => navigate('PhotoGallery', {index, images})}>
            <Image
              source={{uri: item.node.image.uri}}
              style={{
                width: '25%',
                height: (height / 100) * 12,
              }}
              className="border"
            />
          </TouchableWithoutFeedback>
        ))} */}
      </View>
    </View>
  );
}

export default HomeGallery;
