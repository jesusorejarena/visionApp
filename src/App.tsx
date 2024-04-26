import React from 'react';
import {SafeAreaView} from 'react-native';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Initial from './Routes/Initial';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView className="flex-1">
        <Initial />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
