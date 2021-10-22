import React from 'react';
import {View, Text, TextInput} from 'react-native';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          flex: 1,
        }}>
        <View
          style={{
            height: 200,
            backgroundColor: '#fa32',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              backgroundColor: '#fff',
              // height: 100,
              width: '70%',
              borderColor: 'red',
              // borderLeftColor: 'red',
              // borderRightColor: 'red',
              // borderTopColor: 'red',
              // borderBottomColor: 'red',
              borderWidth: 1,
              // borderLeftWidth: 2,
              // borderRightWidth: 2,
              // borderTopWidth: 2,
              // borderBottomWidth: 2,
              // borderRadius: 15,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 10,
              paddingLeft: 20,
              maxHeight: 80,

              color: 'blue',
            }}
            placeholder={'Enter Name'}
            placeholderTextColor={'red'}
            // underlineColorAndroid={'#000'}
            multiline={true}
            numberOfLines={4}
            maxLength={4}
          />
        </View>
      </View>
    );
  }
}
