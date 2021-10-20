import React from 'react';
import {View, Text} from 'react-native';

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
          height: '40%',
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

      <View
        style={{
          height: '60%',
          width: '100%',
          backgroundColor: '#aaf',
          // alignItems: 'center',
        }}>
        <View
          style={{
            height: '50%',
            width: '50%',
            backgroundColor: '#fff',
            // paddingTop: 10,
            paddingLeft: 10,
          }}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#000',
              marginTop: 10,
              // marginBottom: 10,
              // marginLeft: 10,
              // marginRight: 10,
            }}></View>

          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#faf',
              marginTop: 10,
              // marginBottom: 10,
              // marginLeft: 10,
              // marginRight: 10,
            }}></View>
        </View>

        <View
          style={{
            height: '50%',
            width: '100%',
            backgroundColor: '#a5a4',
            // alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 26,
              color: '#fff',
              fontWeight: 'bold',
              fontStyle: 'italic',
              textAlign: 'center',
              // textDecorationLine: 'underline',
            }}
            // numberOfLines={2}
          >
            hello world skfdlk {'\n'} jsflka jfkjdf akfhlkas djfljhas {'\n'}
            dkflsaj
          </Text>
        </View>
      </View>
    </View>
  );
};

export default App;
