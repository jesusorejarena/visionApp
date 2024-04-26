import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from '../Screens/Extras/SplashScreen';
import Navigation from './Navigation';

function Initial(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <SafeAreaProvider>
      {isLoading ? <SplashScreen /> : <Navigation />}
    </SafeAreaProvider>
  );
}

export default Initial;
