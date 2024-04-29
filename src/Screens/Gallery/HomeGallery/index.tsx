/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import {useEffect, useState} from 'react';
import usePermissions from '../../../Hooks/usePermissions';

const {height} = Dimensions.get('window');

function HomeGallery(): React.JSX.Element {
  const {navigate}: any = useNavigation();

  const [images, setImages] = useState<any>({photos: []});

  usePermissions();

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 13,
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

  const renderItem = ({item, index}: any) => (
    <TouchableWithoutFeedback
      className="flex-1"
      key={index}
      onPress={() => {
        navigate('PhotoGallery', {index, images: images.photos});
      }}>
      <Image
        className="border"
        source={{uri: item.node.image.uri}}
        style={{width: '25%', height: (height / 100) * 12}}
      />
    </TouchableWithoutFeedback>
  );

  return (
    <View className="flex-1 flex-wrap bg-black">
      <FlatList
        data={images.photos}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={4}
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

export default HomeGallery;
