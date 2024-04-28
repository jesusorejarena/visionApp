import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {StatusBar} from 'react-native';
import {GalleryRef} from 'react-native-awesome-gallery';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const useGallery = () => {
  const {top} = useSafeAreaInsets();
  const {setParams, goBack} = useNavigation();
  const isFocused = useIsFocused();
  const {params}: any = useRoute();
  const gallery = useRef<GalleryRef>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const [infoVisible, setInfoVisible] = useState(true);

  useEffect(() => {
    StatusBar.setBarStyle(isFocused ? 'light-content' : 'dark-content', true);
    if (!isFocused) {
      StatusBar.setHidden(false, 'fade');
    }
  }, [isFocused]);

  const onIndexChange = useCallback(
    (index: number) => isFocused && setParams({index} as any),
    [isFocused, setParams],
  );

  const onTap = () => {
    StatusBar.setHidden(infoVisible, 'slide');
    setInfoVisible(!infoVisible);
  };

  return {
    infoVisible,
    mounted,
    top,
    params,
    gallery,
    onIndexChange,
    goBack,
    onTap,
  };
};

export default useGallery;
