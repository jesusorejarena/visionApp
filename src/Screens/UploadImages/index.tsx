/* eslint-disable yoda */
/* eslint-disable curly */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import IconsUI from '../../Components/IconsUI';
import {Image} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import RNBackgroundUpload from 'react-native-background-upload';

export default function UploadImages() {
  const navigation: any = useNavigation();

  const [images, setImages] = useState<any>({photos: []});
  const [loadingData, setLoadingData] = useState<any>(false);
  const [status, setStatus] = useState('Pending');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    getPhotos();
  }, []);

  useEffect(() => {
    if (images.photos.length === 0 && loadingData) {
      RNBackgroundUpload.canSuspendIfBackground();
    }
  }, [images, loadingData]);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 200,
      groupTypes: 'All',
    })
      .then(r => {
        setImages({...images, photos: r.edges});
        setLoadingData(true);
      })
      .catch(() => {
        setLoadingData(false);
      });
  };

  async function uploadFile(url: any, fileURI: any) {
    return RNBackgroundUpload.getFileInfo(fileURI).then(
      async (metadata: any) => {
        const uploadOpts = Object.assign(
          {
            path: fileURI,
            method: 'POST',
            headers: {
              'content-type': metadata.mimeType,
            },
          },
          {
            url,
            field: 'uploaded_media',
            type: 'multipart',
            notification: {
              enabled: true,
            },
          },
        );

        const uploadId = await RNBackgroundUpload.startUpload(uploadOpts);

        return new Promise((resolve, reject) => {
          RNBackgroundUpload.addListener('error', uploadId, reject);
          // RNBackgroundUpload.addListener('cancelled', uploadId, () =>
          //   reject(new Error('upload cancelled')),
          // );
          return RNBackgroundUpload.addListener(
            'completed',
            uploadId,
            ({responseCode}: any) => {
              if (200 <= responseCode && responseCode <= 299) {
                resolve('success');
              } else {
                reject('error');
              }
            },
          );
        });
      },
    );
  }

  const uploadManyFilesThenPOST = async (files: any, prevFile?: any) => {
    setStatus('Uploading');

    const filesArreg = [...files];
    const fileA = prevFile ?? filesArreg.shift();

    try {
      const value: any = await uploadFile(
        'https://jsonplaceholder.typicode.com/posts',
        fileA.node.image.uri,
      );

      if (value === 'success' && filesArreg.length > 0) {
        if (filesArreg.length > 5) {
          // Request background time. Do not call this on app suspend/resume since it might be already too late.
          let taskId = await RNBackgroundUpload.beginBackgroundTask();

          // Listen to background time is about to expire events. You can do some cleanup here. You will have about 3 to 4 seconds to run code
          // before the app goes to sleep
          let bgExpiredRelease = RNBackgroundUpload.addListener(
            'bgExpired',
            null,
            data => {
              if (this.working && (!taskId || data.id == taskId)) {
                // do some cleanup
              }
            },
          );
        }

        setImages({photos: filesArreg});

        await uploadManyFilesThenPOST(filesArreg);
      } else {
        setImages({photos: filesArreg});
      }
    } catch (error) {
      if (filesArreg.length > 0)
        await uploadManyFilesThenPOST(filesArreg, fileA);
    } finally {
      if (filesArreg.length === 0) return filesArreg.length;
    }
  };

  const handleUploadImages = async () => {
    try {
      await uploadManyFilesThenPOST(images.photos);
    } catch (error) {
      setStatus('Error');
    } finally {
      setUploading(false);
    }
  };

  console.log(images.photos.length);

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
