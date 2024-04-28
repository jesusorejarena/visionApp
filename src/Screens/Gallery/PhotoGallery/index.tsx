/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Animated as AnimatedReact,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import AwesomeGallery from 'react-native-awesome-gallery';
import Animated, {FadeInUp, FadeOutUp} from 'react-native-reanimated';
import ImageGallery from '../../../Components/Gallery/ImageGallery';
import useGallery from '../../../Hooks/useGallery';
import {Image} from 'react-native';

const windowWidth = Dimensions.get('window').width;

function PhotoGallery(): React.JSX.Element {
  const {
    infoVisible,
    mounted,
    top,
    params,
    gallery,
    onIndexChange,
    goBack,
    onTap,
  } = useGallery();

  const scrollX = new AnimatedReact.Value(0);

  const totalItemWidth = windowWidth / 5;
  const additionalSpace = windowWidth - totalItemWidth;

  const handleScroll = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const roundedX = Math.round(x / totalItemWidth);

    roundedX < params.images.length && gallery.current?.setIndex(roundedX);

    return AnimatedReact.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: true,
    });
  };

  return (
    <View className="flex-1">
      {infoVisible && (
        <Animated.View
          entering={mounted ? FadeInUp.duration(250) : undefined}
          exiting={FadeOutUp.duration(250)}
          className="absolute w-full bg-black/50 z-10"
          style={{height: top + 40}}>
          <View className="flex-1 justify-center items-center">
            <Text className="text-base text-white font-semibold">
              {params.index + 1} of {params.images.length}
            </Text>
          </View>
        </Animated.View>
      )}

      <View className="flex h-full bg-black">
        <AwesomeGallery
          ref={gallery}
          data={params.images.map((uri: any) => ({uri}))}
          keyExtractor={item => item.uri}
          renderItem={ImageGallery}
          initialIndex={params.index}
          numToRender={3}
          doubleTapInterval={150}
          onIndexChange={onIndexChange}
          onSwipeToClose={goBack}
          onTap={onTap}
          disableSwipeUp={true}
          onScaleEnd={scale => scale < 0.8 && goBack()}
          style={{marginBottom: 100, paddingBottom: 100}}
        />

        {infoVisible && (
          <View className="flex">
            <Animated.FlatList
              className="py-3"
              horizontal
              data={params.images}
              renderItem={({item, index}) => {
                return (
                  <View
                    key={index}
                    className="mb-3"
                    style={{
                      width: windowWidth / 5,
                      marginLeft: index === 0 ? additionalSpace / 2 : 0,
                      marginRight:
                        index === params.images.length - 1
                          ? additionalSpace / 2
                          : 0,
                    }}>
                    <TouchableWithoutFeedback
                      onPress={() => gallery.current?.setIndex(index)}>
                      <Image
                        source={{uri: item}}
                        className="border h-[80px] w-full"
                      />
                    </TouchableWithoutFeedback>
                  </View>
                );
              }}
              pagingEnabled
              snapToInterval={windowWidth / 5}
              snapToAlignment="center"
              keyExtractor={(item, index) => index.toString()}
              decelerationRate={0}
              scrollEventThrottle={16}
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export default PhotoGallery;
