import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

export class Dashboard extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <View
          style={{
            height: 50,
            backgroundColor: '#aaf',
          }}
        />

        <View
          style={{
            height: '15%',
            // backgroundColor: '#a4a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('BasicsTwo');
            }}
            style={{
              height: '90%',
              width: '90%',
              borderColor: 'red',
              borderWidth: 1,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>List</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
