/* eslint-disable react/react-in-jsx-scope */
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';
import {IconsUIProps} from '../../Types/components';

const IconsUI: React.FC<IconsUIProps> = ({
  collection,
  icon,
  color = '#000',
  size = '16',
}) => {
  switch (collection) {
    case 'AntDesign':
      return (
        <AntDesign name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'Feather':
      return (
        <Feather name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'Fontisto':
      return (
        <Fontisto name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'MaterialCommunityIcons':
      return (
        <MaterialCommunityIcons
          name={icon}
          style={{color: color}}
          size={parseInt(size)}
        />
      );

    case 'MaterialIcons':
      return (
        <MaterialIcons
          name={icon}
          style={{color: color}}
          size={parseInt(size)}
        />
      );

    case 'EvilIcons':
      return (
        <EvilIcons name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'SimpleLineIcons':
      return (
        <SimpleLineIcons
          name={icon}
          style={{color: color}}
          size={parseInt(size)}
        />
      );

    case 'FontAwesome5':
      return (
        <FontAwesome5
          name={icon}
          style={{color: color}}
          size={parseInt(size)}
        />
      );

    case 'FontAwesome6':
      return (
        <FontAwesome6
          name={icon}
          style={{color: color}}
          size={parseInt(size)}
        />
      );

    case 'Entypo':
      return (
        <Entypo name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'Ionicons':
      return (
        <Ionicons name={icon} style={{color: color}} size={parseInt(size)} />
      );

    case 'Octicons':
      return (
        <Octicons name={icon} style={{color: color}} size={parseInt(size)} />
      );

    default:
      return (
        <FontAwesome name={icon} style={{color: color}} size={parseInt(size)} />
      );
  }
};

export default IconsUI;
