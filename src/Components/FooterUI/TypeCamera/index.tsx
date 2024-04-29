/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import ButtonPills from './ButtonPills';

const windowWidth = Dimensions.get('window').width;

const data = [
  {id: 0, label: 'Camera'},
  {id: 1, label: 'Video'},
];

function TypeCamera({typePosition}: any): React.JSX.Element {
  const [select, setSelect] = useState<any>(data[0]);

  const scrollX = new Animated.Value(0);
  scrollX.addListener(() => {
    return;
  });

  const totalItemWidth = windowWidth / 3;
  const additionalSpace = windowWidth - totalItemWidth;

  const handleScroll = (event: any) => {
    const {x} = event.nativeEvent.contentOffset;
    const roundedX = Math.round(x / totalItemWidth);

    const response = data.find(p => p.id === roundedX);

    typePosition(response?.label);
    setSelect(response);

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
