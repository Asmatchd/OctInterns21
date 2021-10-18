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
        // alignItems: 'center',
        // alignItems: 'flex-end',
        // justifyContent: 'center',
        // justifyContent: 'flex-end',
      }}>
      {/* Top view */}
      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: '#afa',

          justifyContent: 'space-between',
          // justifyContent: 'space-evenly',
          // justifyContent: 'space-around',
          flexDirection: 'row',
          // alignItems: 'space-between',
        }}>
        {/* left view */}
        <View
          style={{
            height: '100%',
            width: '40%',
            backgroundColor: '#aa2',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              height: 70,
              width: 70,
            }}></View>

          <View
            style={{
              backgroundColor: '#a4a',
              height: 70,
              width: 70,
            }}></View>
        </View>

        {/* right view */}
        <View
          style={{
            height: '100%',
            width: '40%',
            backgroundColor: '#a07',
            justifyContent: 'space-around',
            flexDirection: 'row',
          }}>
          <View
            style={{
              backgroundColor: '#000',
              height: 70,
              width: 70,
            }}></View>

          <View
            style={{
              backgroundColor: '#fff',
              height: 70,
              width: 70,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default App;
