import React from 'react';
import {View} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        backgroundColor: '#faf',
        // height: '100%',
        // width: '100%',
        flex: 1,
        alignItems: 'center',
        // alignItems: 'flex-end',
        justifyContent: 'center',
        // justifyContent: 'flex-end',
      }}>
      <View
        style={{
          height: 70,
          width: 70,
          backgroundColor: '#000',
        }}></View>
    </View>
  );
};

export default App;
