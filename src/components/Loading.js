import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class Loading extends Component {
  render() {
    return this.props.visible ? (
      <View
        style={{
          height: '100%',
          width: '100%',
          zIndex: 1,
          position: 'absolute',
          backgroundColor: '#0003',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="red" />
        <Text
          style={{
            color: 'red',
            fontSize: h('2.5'),
            marginTop: h('2'),
          }}>
          Please wait.
        </Text>
      </View>
    ) : null;
  }
}
