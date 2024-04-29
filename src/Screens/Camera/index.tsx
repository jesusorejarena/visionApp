import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Camera as CameraUI} from 'react-native-vision-camera';
import usePermissions from '../../Hooks/usePermissions';
import useCameraPosition from '../../Hooks/useCameraPosition';
import useFunctionsCamera from '../../Hooks/useFunctionsCamera';
import HeaderUI from '../../Components/HeaderUI';
import FooterUI from '../../Components/FooterUI';

function Camera(): React.JSX.Element {
  // Este codigo sirve para cuando se va a la ventana de imagenes
  /* const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active'; */

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
  } = useFunctionsCamera({device, switchPosition});

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
      />

      <CameraUI
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo={true}
        video={true}
        audio={volumeButton}
        format={format}
        videoHdr={format.supportsVideoHdr}
        photoHdr={format.supportsPhotoHdr}
      />

      <FooterUI
        switchPositionCamera={switchPositionCamera}
        takePhoto={takePhoto}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    </View>
  );
}

export default Camera;