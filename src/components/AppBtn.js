import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export class AppBtn extends React.Component {
  render() {
    return (
      <View
        style={[
          {
            // backgroundColor: '#faf',
            width: '100%',
            alignItems: 'center',
          },
          this.props.st,
        ]}>
        <TouchableOpacity
          {...this.props}
          style={{
            backgroundColor: '#000',
            height: 50,
            width: '70%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
          }}>
          <Text
            style={{
              color: '#fff',
            }}>
            {this.props.txt}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
