import * as React from 'react';
import {Image, View} from 'react-native';
import {RenderItemInfo} from 'react-native-awesome-gallery';

function ImageGallery({
  item,
  setImageDimensions,
}: RenderItemInfo<{uri: string}>): React.JSX.Element {
  return (
    <View className="flex-1 flex h-full justify-center mb-32">
      <Image
        className="w-full h-[50%]"
        source={{uri: item.uri}}
        onLoad={e => {
          const {width, height} = e.nativeEvent.source;
          setImageDimensions({width, height});
        }}
      />
    </View>
  );
}

export default ImageGallery;
