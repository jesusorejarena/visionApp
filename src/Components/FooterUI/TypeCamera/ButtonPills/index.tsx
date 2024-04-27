import React from 'react';
import {Text, View} from 'react-native';

function ButtonPills({title}: any): React.JSX.Element {
  return (
    <View className="bg-black/50 px-5 py-1 rounded-2xl w-30 flex items-center">
      <Text className="text-white">{title}</Text>
    </View>
  );
}

export default ButtonPills;
