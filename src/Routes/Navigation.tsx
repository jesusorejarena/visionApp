import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';

function Navigation(): React.JSX.Element {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        // animationEnabled: false,
      }}>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
      {/* <Stack.Screen
        name="Galery"
        component={Galery}
        options={{title: 'Galery'}}
      /> */}
    </Stack.Navigator>
  );
}

export default Navigation;
