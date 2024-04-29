/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import ButtonPills from './ButtonPills';
import {TypeCameraProps, TypeCameraValueProps} from '../../../Types/components';
import {typeCamera} from '../../../Utils';

const windowWidth = Dimensions.get('window').width;

function TypeCamera({typePosition}: TypeCameraProps): React.JSX.Element {
  const [select, setSelect] = useState<TypeCameraValueProps>(typeCamera[0]);

  const scrollX = new Animated.Value(0);
  scrollX.addListener(() => {
    return;
  });

  const totalItemWidth = windowWidth / 3;
  const additionalSpace = windowWidth - totalItemWidth;

  const handleScroll = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const roundedX = Math.round(x / totalItemWidth);

    const response = typeCamera.find(p => p.id === roundedX);

    if (response) {
      typePosition(response?.label);
      setSelect(response);
    }

    return Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: true,
    });
  };

  return (
    <Animated.FlatList
      className="py-3"
      horizontal
      data={typeCamera}
      renderItem={({item, index}) => {
        return (
          <View
            className="justify-center items-center"
            style={{
              width: windowWidth / 3,
              marginLeft: index === 0 ? additionalSpace / 2 : 0,
              marginRight:
                index === typeCamera.length - 1 ? additionalSpace / 2 : 0,
            }}>
            <ButtonPills item={item} select={select} />
          </View>
        );
      }}
      pagingEnabled
      snapToInterval={windowWidth / 3}
      snapToAlignment="center"
      keyExtractor={(item, index) => index.toString()}
      decelerationRate={0}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
    />
  );
}

export default TypeCamera;
