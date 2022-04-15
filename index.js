/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
// import App from './App';
import App1 from './stack/man1';
import App2 from './stack/man2';
import {name as appName} from './app.json';
const Stack = createNativeStackNavigator();
export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="App1" component={App1} />
        <Stack.Screen name="App2" component={App2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

AppRegistry.registerComponent(appName, () => App);
