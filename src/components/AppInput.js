import React from 'react';
import {View, TextInput} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class AppInput extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            height: 55,
            // backgroundColor: '#faf',
            flexDirection: 'row',
            borderWidth: 0.5,
            borderRadius: 10,
          },
          this.props.st,
        ]}>
        <View
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'center',
            borderRightWidth: 0.5,
          }}>
          <Ionicons name={this.props.ic} size={20} color={'red'} />
        </View>
        <View
          style={{
            height: '100%',
            width: '85%',
          }}>
          <TextInput
            {...this.props}
            style={{
              height: '100%',
              width: '100%',
              paddingLeft: 10,
            }}
          />
        </View>
      </View>
    );
  }
}
