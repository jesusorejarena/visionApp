import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import IconsUI from '../IconsUI';

function HeaderUI(): React.JSX.Element {
  return (
    <View className="p-10 h-10 bg-black/80 z-10 flex items-center justify-between">
      <TouchableOpacity onPress={() => console.log('press')}>
        <IconsUI collection="Feather" icon="lock" size="24" color="white" />
      </TouchableOpacity>
      <Text className="text-white">Hola</Text>
    </View>
  );
}

export default HeaderUI;
