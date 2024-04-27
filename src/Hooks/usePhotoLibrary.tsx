import {CameraRoll} from '@react-native-camera-roll/camera-roll';

const usePhotoLibrary = () => {
  const savePhotoOrVideo = async (roll: any, type: any) => {
    try {
      const file = await roll;

      await CameraRoll.save(`file://${file.path}`, {
        type: type,
      });
    } catch (e) {
      console.log('Failed save file!', e);
    }
  };

  return {savePhotoOrVideo};
};

export default usePhotoLibrary;
