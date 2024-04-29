/* eslint-disable curly */
import {useCallback, useEffect, useRef, useState} from 'react';
import {Camera, useCameraFormat} from 'react-native-vision-camera';
import {flashOptions, resolutionsOptions, zoomOptionsBack} from '../Utils';
import usePhotoLibrary from './usePhotoLibrary';
import {zoomOptionsProps} from '../Types/components';

const useFunctionsCamera = ({device, switchPosition}: any) => {
  const camera = useRef<Camera>(null);

  const [flashButton, setFlashButton] = useState(0);
  const [volumeButton, setVolumeButton] = useState(true);
  const [fpsButton, setFpsButton] = useState(true);
  const [hdrButton, setHdrButton] = useState(false);
  const [qualityButton, setQualityButton] = useState(0);
  const [selectZoom, setSelectZoom] = useState(zoomOptionsBack[1]);
  const [typeCamera, setTypeCamera] = useState<string>('Camera');

  const {savePhotoOrVideo} = usePhotoLibrary();

  const format: any = useCameraFormat(device, [
    {photoHdr: true},
    {videoHdr: true},
  ]);

  const takePhoto = useCallback(async () => {
    try {
      if (camera.current == null) throw console.log('Camera ref is null!');

      console.log('Taking photo...');

      const photo = await camera.current.takePhoto({
        flash: switchPosition === 'front' ? 'off' : flashOptions[flashButton],
        enableShutterSound: true,
      });

      savePhotoOrVideo(photo, 'photo');
    } catch (e) {
      console.log('Failed to take photo!', e);
    }
  }, [flashButton, savePhotoOrVideo, switchPosition]);

  const startRecording = useCallback(async () => {
    try {
      if (camera.current == null) throw console.log('Camera ref is null!');

      console.log('Start recording...');

      let bitRate = 1024 * resolutionsOptions[qualityButton].value;
      bitRate = (bitRate / 30) * (fpsButton ? 60 : 30);
      if (hdrButton === true) bitRate *= 1.2; // 10-Bit Video HDR
      bitRate *= 0.8; // H.265
      // bitRate *= yourCustomFactor; // e.g. 0.5x for half the bit-rate

      camera.current.startRecording({
        flash:
          switchPosition === 'front' ||
          flashOptions[flashButton] === 'auto' ||
          flashOptions[flashButton] === 'off'
            ? 'off'
            : 'on',
        onRecordingError: error => console.log(error),
        onRecordingFinished: video => {
          savePhotoOrVideo(video, 'video');
        },
        videoBitRate: bitRate,
      });
    } catch (e) {
      console.log('Failed to start video!', e);
    }
  }, [
    flashButton,
    fpsButton,
    hdrButton,
    qualityButton,
    savePhotoOrVideo,
    switchPosition,
  ]);

  const stopRecording = useCallback(async () => {
    try {
      if (camera.current == null) throw console.log('Camera ref is null!');

      console.log('Stop recording...');

      await camera.current.stopRecording();
    } catch (e) {
      console.log('Failed to stop video!', e);
    }
  }, []);

  const changeFlash = () =>
    setFlashButton(
      flashButton >= flashOptions.length - 1 ? 0 : flashButton + 1,
    );

  const changeVolume = () => setVolumeButton(!volumeButton);

  const changeFps = () => setFpsButton(!fpsButton);

  const changeHdr = () => setHdrButton(!hdrButton);

  const changeQuality = () =>
    setQualityButton(
      qualityButton >= resolutionsOptions.length - 1 ? 0 : qualityButton + 1,
    );

  const changeZoom = (zoom: zoomOptionsProps) => {
    setSelectZoom(zoom);
  };

  useEffect(() => {
    setSelectZoom(zoomOptionsBack[1]);
  }, [switchPosition]);

  return {
    format,
    camera,
    takePhoto,
    startRecording,
    stopRecording,
    flashButton,
    changeFlash,
    volumeButton,
    changeVolume,
    fpsButton,
    changeFps,
    hdrButton,
    changeHdr,
    qualityButton,
    changeQuality,
    selectZoom,
    changeZoom,
    typeCamera,
    setTypeCamera,
  };
};

export default useFunctionsCamera;
