/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import IconsUI from '../../Components/IconsUI';
import {Image} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import axios from 'axios';

export default function UploadImages() {
  const navigation: any = useNavigation();

  const [images, setImages] = useState<any>({photos: []});
  const [status, setStatus] = useState('Pending');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getPhotos();
  }, []);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 10,
      groupTypes: 'All',
    })
      .then(r => {
        setImages({...images, photos: r.edges});
      })
      .catch(err => {
        console.log(err);
        //Error Loading Images
      });
  };

  const handleUploadImages = async () => {
    try {
      setUploading(true);

      for (let i = 0; i < images.photos.length; i++) {
        const image = images.photos[i];

        setStatus('Uploading');

        const form = new FormData();

        form.append('image', {
          uri: image.node.image.uri,
          type: `image/${image.node.image.extension}`,
          name: image.node.image.filename,
        });

        await axios.post(
          'https://dummy.restapiexample.com/api/v1/create',
          form,
          {headers: {'Content-Type': 'multipart/form-data'}},
        );

        const filterImages = images.photos.filter(
          (item: any) => item.node.id !== image.node.id,
        );

        setImages({photos: filterImages});
      }
    } catch (error) {
      setStatus('Error');
      setTimeout(handleUploadImages, 5000);
    } finally {
      setUploading(false);
    }
  };

  return (
    <View className="flex-1 bg-white px-2 py-4">
      <View className="flex flex-row justify-between">
        <View className="flex flex-col">
          <Text className="text-2xl font-bold">PhotoQ</Text>
          <Text className="text-base">
            {images.photos.length} Photos in queue
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleUploadImages}
          disabled={uploading}
          className="flex flex-row space-x-2 items-center justify-center rounded-lg border border-gray-700 p-2 text-gray-700 bg-white">
          <IconsUI
            collection="MaterialIcons"
            icon="file-upload"
            size="18"
            color="#000"
          />
          <Text className="text-sm">Update All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        className="mt-4 px-3"
        data={images.photos}
        renderItem={({item, index}: any) => {
          return (
            <View
              key={index}
              className="flex flex-row justify-between items-center border-b border-1 py-4">
              <View className="flex flex-row items-center space-x-2">
                <Image
                  source={{uri: item.node.image.uri}}
                  className="rounded-lg h-[80px] w-[80px]"
                />
                <View className="flex flex-col space-y-2">
                  <Text className="font-bold w-[150px]">
                    {item.node.image.filename}
                  </Text>
                  <Text className="text-xs">
                    Latitude: {item.node.location?.latitude ?? ''}
                  </Text>
                  <Text className="text-xs">
                    Longitude: {item.node.location?.longitude ?? ''}
                  </Text>
                </View>
              </View>

              <View className="flex flex-row space-x-2 items-center justify-center p-2 rounded-lg bg-gray-700">
                <Text className="text-white">
                  {item.node.id === images.photos[0].node.id
                    ? status
                    : 'Pending'}
                </Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

// {
//          "node":{
//             "timestamp":1715048696.789,
//             "id":"271D762E-0EDF-4E50-9DDF-22408584C51B/L0/001",
//             "modificationTimestamp":1715048704.514427,
//             "image":{
//                "uri":"ph://271D762E-0EDF-4E50-9DDF-22408584C51B/L0/001",
//                "extension":"jpeg",
//                "filename":"E1D621B2-C73A-460F-8C48-0218DDE7D0F5.jpeg",
//                "width":2340,
//                "fileSize":1139022,
//                "playableDuration":null,
//                "height":4160
//             },
//             "subTypes":[

//             ],
//             "location":{
//                "altitude":2569.768852459016,
//                "longitude":-74.0273555,
//                "latitude":4.748866666666666,
//                "heading":351.60458360232406,
//                "speed":0
//             },
//             "type":"image",
//             "sourceType":"UserLibrary",
//             "group_name":[

//             ]
//          }
//       },
