import React from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import ButtonPills from './ButtonPills';
import {zoomOptionsBack, zoomOptionsFront} from '../../../Utils';
import {TypeZoomProps, ZoomOptionsProps} from '../../../Types/components';

const windowWidth = Dimensions.get('window').width;

function TypeZoom({
  switchPosition,
  selectZoom,
  changeZoom,
}: TypeZoomProps): React.JSX.Element {
  const zoomOptions =
    switchPosition === 'back' ? zoomOptionsBack : zoomOptionsFront;

  return (
    <View className="flex flex-row justify-center items-center gap-x-3">
      {zoomOptions.map((item: ZoomOptionsProps, index: number) => (
        <TouchableOpacity
          key={index}
          onPress={() => changeZoom(item)}
          style={{
            width: windowWidth / 12,
          }}>
          <ButtonPills item={item} select={selectZoom} />
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default TypeZoom;
