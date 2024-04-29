/* eslint-disable react-hooks/exhaustive-deps */
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {useCallback, useEffect, useRef, useState} from 'react';
import {Animated, Dimensions, StatusBar} from 'react-native';
import {GalleryRef} from 'react-native-awesome-gallery';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const windowWidth = Dimensions.get('window').width;

const useGallery = () => {
  const scrollX = new Animated.Value(0);

  const {top} = useSafeAreaInsets();
  const {setParams, goBack} = useNavigation();
  const isFocused = useIsFocused();
  const {params}: any = useRoute();

  const flatListRef: any = useRef(null);
  const gallery = useRef<GalleryRef>(null);

  const [mounted, setMounted] = useState(false);
  const [infoVisible, setInfoVisible] = useState(true);
  const [isTouching, setIsTouching] = useState(false);

  const handleTouch = (touching: boolean) => {
    if (touching) {
      setTimeout(() => {
        setIsTouching(touching);
      }, 100);
    } else {
      setIsTouching(touching);
    }
  };

  useEffect(() => {
    setMounted(true);
    !isTouching && scrollToItem(params.index);
  }, [flatListRef.current]);

  useEffect(() => {
    StatusBar.setBarStyle(isFocused ? 'light-content' : 'dark-content', true);
    if (!isFocused) {
      StatusBar.setHidden(false, 'fade');
    }
  }, [isFocused]);

  const onIndexChange = useCallback(
    (index: number) => {
      if (isFocused) {
        setParams({index} as any);
        isTouching && scrollToItem(index);
      }
    },
    [isFocused, isTouching, setParams],
  );

  const onTap = () => {
    StatusBar.setHidden(infoVisible, 'slide');
    setInfoVisible(!infoVisible);
  };

  const totalItemWidth = windowWidth / 5;
  const additionalSpace = windowWidth - totalItemWidth;

  const handleScroll = (event: any) => {
    if (!isTouching) {
      const {x} = event.nativeEvent.contentOffset;
      const roundedX = Math.round(x / totalItemWidth);

      roundedX >= 0 &&
        roundedX < params.images.length &&
        gallery.current?.setIndex(roundedX);

      return Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
        useNativeDriver: true,
      });
    }
  };

  const scrollToItem = (index: number) => {
    console.log(flatListRef);

    flatListRef.current &&
      flatListRef.current.scrollToIndex({
        index: index,
        animated: true,
        viewPosition: 0.5,
      });
  };

  return {
    isTouching,
    infoVisible,
    mounted,
    top,
    params,
    gallery,
    onIndexChange,
    goBack,
    onTap,
    flatListRef,
    totalItemWidth,
    additionalSpace,
    handleScroll,
    windowWidth,
    scrollX,
    handleTouch,
  };
};

export default useGallery;
