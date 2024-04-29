/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Animated, Dimensions, TouchableOpacity, View} from 'react-native';
import ButtonPills from './ButtonPills';

const windowWidth = Dimensions.get('window').width;

const zoom = [
  {id: 0, label: '0.5x'},
  {id: 1, label: '1x'},
  {id: 2, label: '2x'},
  {id: 2, label: '3x'},
  {id: 2, label: '5x'},
  {id: 2, label: '10x'},
  {id: 2, label: '15x'},
];

function TypeZoom({typePosition}: any): React.JSX.Element {
  const [selectZoom, setSelectZoom] = useState(1);

  return (
    <>
      <View className="gap-x-3">
        {zoom.map((item: any, index: number) => (
          <TouchableOpacity
            onPress={() => setSelectZoom(index)}
            className="justify-center items-center"
            style={{
              width: windowWidth / item.length,
            }}>
            <ButtonPills title={item.label} select={selectZoom} />
          </TouchableOpacity>
        ))}
      </View>
      {/* <Animated.FlatList
        className="py-3"
        horizontal
        data={data}
        renderItem={({item, index}) => {
          return (
            <View
              className="justify-center items-center"
              style={{
                width: windowWidth / data.length,
                marginLeft: index === 0 ? additionalSpace / 2 : 0,
                marginRight:
                  index === data.length - 1 ? additionalSpace / 2 : 0,
              }}>
              <ButtonPills title={item.label} />
            </View>
          );
        }}
        pagingEnabled
        snapToInterval={windowWidth / data.length}
        snapToAlignment="center"
        keyExtractor={(item, index) => index.toString()}
        decelerationRate={0}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      /> */}
    </>
  );
}

export default TypeZoom;
