import 'react-native-gesture-handler';
import React from 'react';
import {LogBox} from 'react-native';
import {ScreenNavigator} from './src/navigation/ScreenNavigator';
LogBox.ignoreLogs(['Reanimated 2']);
const App = () => {
  return <ScreenNavigator />;
};

export default App;
