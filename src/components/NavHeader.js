import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

export class NavHeader extends React.Component {
  render() {
    return (
      <View
        style={{
          height: 50,
          // backgroundColor: '#aaf',
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderColor: 'red',
        }}>
        <TouchableOpacity
          onPress={this.props.leftPressed}
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.leftIc} size={25} color={'red'} />
        </TouchableOpacity>
        <View
          style={{
            height: '100%',
            width: '70%',
            // backgroundColor: '#a3a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text>{this.props.title}</Text>
        </View>
        <TouchableOpacity
          onPress={this.props.rightPressed}
          style={{
            height: '100%',
            width: '15%',
            // backgroundColor: '#faf',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name={this.props.rightIc} size={25} color={'red'} />
        </TouchableOpacity>
      </View>
    );
  }
}
