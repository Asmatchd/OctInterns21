import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {NavHeader} from '../../components';

export class Dashboard extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    if (navProps !== undefined) {
      this.setState({
        user: navProps,
        name: navProps.name,
        email: navProps.email,
        password: navProps.password,
      });
      // console.warn('GIft ha');
    } else {
      // console.warn('NO roti pani');
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <NavHeader
          leftIc={'ios-list'}
          title={'Dashboard'}
          rightIc={'ios-arrow-forward'}
          leftPressed={() => {
            console.warn('left');
          }}
          rightPressed={() => {
            console.warn('right');
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
              // this.props.navigation.navigate('BasicsTwo');
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

        <View
          style={{
            height: '15%',
            // backgroundColor: '#a4a',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              const navProps = {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
              };
              this.props.navigation.navigate('EditProfile', navProps);
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
            <Text>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}