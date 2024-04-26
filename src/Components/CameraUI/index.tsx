import React, {useRef} from 'react';
import {StyleSheet} from 'react-native';
import {Camera} from 'react-native-vision-camera';
import usePermissions from '../../Hooks/usePermissions';
import useCameraPosition from '../../Hooks/useCameraPosition';
import HeaderUI from '../HeaderUI';
import FooterUI from '../FooterUI';

function CameraUI(): React.JSX.Element {
  // Este codigo sirve para cuando se va a la ventana de imagenes
  /* const isFocused = useIsFocused();
  const appState = useAppState();
  const isActive = isFocused && appState === 'active'; */

  usePermissions();

  const {device}: any = useCameraPosition();

  const camera = useRef<Camera>(null);
  // const photo = await camera.current.takePhoto();

  return (
    <>
      <HeaderUI />

      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        // photo={true}
      />

      <FooterUI />
    </>
  );
}

export default CameraUI;
