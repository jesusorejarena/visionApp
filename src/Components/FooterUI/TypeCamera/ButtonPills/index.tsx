import React from 'react';
import {Text, View} from 'react-native';
import {ButtonPillsProps} from '../../../../Types/components';

function ButtonPills({item, select}: ButtonPillsProps): React.JSX.Element {
  return (
    <View className="bg-black/50 px-5 py-1 rounded-2xl w-30 flex items-center">
      <Text
        className={`${
          item.id === select.id ? 'text-yellow-500' : 'text-white'
        } font-bold`}>
        {item.label}
      </Text>
    </View>
  );
}

export default ButtonPills;
