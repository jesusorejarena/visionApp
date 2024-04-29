import React from 'react';
import {Text, View} from 'react-native';

function ButtonPills({item, select}: any): React.JSX.Element {
  return (
    <View
      className={`${
        item.id === select.id ? 'bg-black' : 'bg-black/50'
      } p-1 rounded-full`}>
      <View className="flex flex-row items-center justify-center w-6 h-6">
        <Text
          className={`${
            item.id === select.id ? 'text-yellow-500' : 'text-white'
          } text-[9px] font-bold`}>
          {item.label}
        </Text>
      </View>
    </View>
  );
}

export default ButtonPills;
