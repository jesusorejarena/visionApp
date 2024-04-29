import React from 'react';
import {Text, View} from 'react-native';

function ButtonPills({title, select}: any): React.JSX.Element {
  return (
    <View className={`${select ? 'bg-black' : 'bg-black/50'} p-1 rounded-full`}>
      <View className="flex flex-row items-center justify-center w-6 h-6">
        <Text
          className={`${
            select ? 'text-yellow-500' : 'text-white'
          } text-[9px] font-bold`}>
          {title}
        </Text>
      </View>
    </View>
  );
}

export default ButtonPills;
