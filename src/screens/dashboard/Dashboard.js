import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export class Dashboard extends React.Component {
  state = {
    name: '',
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({name: navProps});
  };

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
            // backgroundColor: '#aaf',
            flexDirection: 'row',
            borderBottomWidth: 0.5,
            borderColor: 'red',
          }}>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '15%',
              // backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name={'ios-list'} size={25} color={'red'} />
          </TouchableOpacity>
          <View
            style={{
              height: '100%',
              width: '70%',
              // backgroundColor: '#a3a',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text>{this.state.name}</Text>
          </View>
          <TouchableOpacity
            style={{
              height: '100%',
              width: '15%',
              // backgroundColor: '#faf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <MaterialIcons name={'support-agent'} size={25} color={'red'} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: '15%',
            // backgroundColor: '#a4a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              // this.props.navigation.navigate('BasicsTwo');
              console.warn(this);
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
