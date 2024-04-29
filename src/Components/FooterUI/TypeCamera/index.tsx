/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import ButtonPills from './ButtonPills';

const windowWidth = Dimensions.get('window').width;

const data = [
  {id: 0, label: 'Camera'},
  {id: 1, label: 'Video'},
  {id: 2, label: 'Panoramica'},
];

function TypeCamera({typePosition}: any): React.JSX.Element {
  const scrollX = new Animated.Value(0);

  const totalItemWidth = windowWidth / 3;
  const additionalSpace = windowWidth - totalItemWidth;

  const handleScroll = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const roundedX = Math.round(x / totalItemWidth);

    typePosition(data.find(p => p.id === roundedX)?.label);

    return Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {
      useNativeDriver: true,
    });
  };

  return (
    <Animated.FlatList
      className="py-3"
      horizontal
      data={data}
      renderItem={({item, index}) => {
        return (
          <View
            className="justify-center items-center"
            style={{
              width: windowWidth / 3,
              marginLeft: index === 0 ? additionalSpace / 2 : 0,
              marginRight: index === data.length - 1 ? additionalSpace / 2 : 0,
            }}>
            <ButtonPills title={item.label} />
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
