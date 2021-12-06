import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AppBtn, NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class EditProfile extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({
      name: navProps.name,
      email: navProps.email,
      password: navProps.password,
    });
  };

  updateUser = () => {
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };
    AsyncStorage.setItem('userData', JSON.stringify(data), () => {
      this.props.navigation.replace('TabNavigator');
    });
  };

  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#aaf',
          }}>
          <NavHeader
            leftIc={'ios-arrow-back'}
            title={'Edit Profile'}
            leftPressed={() => {
              this.props.navigation.goBack();
            }}
          />

          {/* spacer */}
          <View
            style={{
              height: '5%',
              //   backgroundColor: '#faf',
            }}
          />

          {/* bottom view */}
          <View
            style={{
              // backgroundColor: '#1af',
              height: 350,
              padding: 15,
            }}>
            <TextInput
              onChangeText={txt => this.setState({name: txt})}
              style={{
                // backgroundColor: '#aaf',
                borderColor: 'red',
                borderBottomWidth: 0.5,
              }}
              placeholder={'Name'}
              value={this.state.name}
            />

            <TextInput
              onChangeText={txt => this.setState({email: txt})}
              style={{
                // backgroundColor: '#aaf',
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}
              placeholder={'Email'}
              value={this.state.email}
              editable={false}
            />

            <TextInput
              onChangeText={txt => this.setState({password: txt})}
              style={{
                // backgroundColor: '#aaf',
                borderColor: 'red',
                borderBottomWidth: 0.5,
                marginTop: 10,
              }}
              placeholder={'Password'}
              value={this.state.password}
            />

            <AppBtn
              txt={'Update'}
              onPress={() => this.updateUser()}
              st={{
                marginTop: 20,
              }}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
