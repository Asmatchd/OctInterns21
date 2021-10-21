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
            height: 100,
            backgroundColor: '#fa3',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TextInput
            style={{
              backgroundColor: '#faf',
              height: 50,
              width: '70%',
            }}
            placeholder={'Enter Name'}
          />
        </View>
      </View>
    );
  }
}
