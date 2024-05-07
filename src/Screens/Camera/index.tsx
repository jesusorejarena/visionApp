import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Camera as CameraUI} from 'react-native-vision-camera';
import usePermissions from '../../Hooks/usePermissions';
import useCameraPosition from '../../Hooks/useCameraPosition';
import useFunctionsCamera from '../../Hooks/useFunctionsCamera';
import HeaderUI from '../../Components/HeaderUI';
import FooterUI from '../../Components/FooterUI';
import {useIsFocused} from '@react-navigation/native';

function Camera(): React.JSX.Element {
  const isFocused = useIsFocused();

  const [isActive, setIsActive] = useState(false);

  usePermissions();

  const {device, switchPositionCamera, switchPosition}: any =
    useCameraPosition();

  const {
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
    recording,
    setRecording,
  } = useFunctionsCamera({device, switchPosition});

  useEffect(() => {
    setIsActive(isFocused);
  }, [isFocused]);
  return (
    <View className="flex-1">
      <HeaderUI
        flashButton={flashButton}
        changeFlash={changeFlash}
        volumeButton={volumeButton}
        changeVolume={changeVolume}
        fpsButton={fpsButton}
        changeFps={changeFps}
        hdrButton={hdrButton}
        changeHdr={changeHdr}
        qualityButton={qualityButton}
        changeQuality={changeQuality}
        typeCamera={typeCamera}
        switchPosition={switchPosition}
        recording={recording}
      />

      <CameraUI
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isActive}
        photo={true}
        video={true}
        audio={volumeButton}
        format={format}
        videoHdr={format.supportsVideoHdr}
        photoHdr={format.supportsPhotoHdr}
        // enableZoomGesture={true}
        zoom={selectZoom.value}
        enableLocation={true}
      />

      <FooterUI
        switchPosition={switchPosition}
        switchPositionCamera={switchPositionCamera}
        takePhoto={takePhoto}
        startRecording={startRecording}
        stopRecording={stopRecording}
        selectZoom={selectZoom}
        changeZoom={changeZoom}
        setIsActive={setIsActive}
        typeCamera={typeCamera}
        setTypeCamera={setTypeCamera}
        recording={recording}
        setRecording={setRecording}
      />
    </View>
  );
}

export default Camera;
