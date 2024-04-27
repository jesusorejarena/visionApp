import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import IconsUI from '../IconsUI';
import {flashOptions, resolutionsOptions} from '../../Utils';

function HeaderUI({
  flashButton,
  changeFlash,
  volumeButton,
  changeVolume,
  fpsButton,
  changeFps,
  hdrButton,
  changeHdr,
  qualityButton,
  changeQuality,
}: any): React.JSX.Element {
  return (
    <View className="p-3 bg-black/50 z-10 flex flex-row items-center justify-between gap-5">
      <TouchableOpacity className="p-1" onPress={changeQuality}>
        <IconsUI
          collection="MaterialIcons"
          icon={resolutionsOptions[qualityButton].icon}
          size="28"
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity className="p-1" onPress={changeHdr}>
        <IconsUI
          collection="MaterialIcons"
          icon={hdrButton ? 'hdr-on' : 'hdr-off'}
          size="28"
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity className="p-1" onPress={changeFps}>
        <IconsUI
          collection="MaterialIcons"
          icon={fpsButton ? '60fps' : '30fps'}
          size="28"
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity className="p-1" onPress={changeFlash}>
        <IconsUI
          collection="MaterialIcons"
          icon={`flash-${flashOptions[flashButton]}`}
          size="28"
          color="#fff"
        />
      </TouchableOpacity>

      <TouchableOpacity className="p-1" onPress={changeVolume}>
        <IconsUI
          collection="MaterialIcons"
          icon={volumeButton ? 'volume-up' : 'volume-mute'}
          size="28"
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

export default HeaderUI;
