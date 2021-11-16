import React from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBtn, AppInput, NavHeader} from '../../components';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    secureTxt: true,
  };

  sendData = (param, param2) => {
    // console.warn('Button pressed');
    console.warn('this is Param1    =   ' + param);
    console.warn('this is Param2    =   ' + param2);
  };

  createUser = () => {
    // if (
    //   this.state.name === '' ||
    //   this.state.email === '' ||
    //   this.state.password === ''
    // ) {
    //   alert('All fields are required');
    // } else {
    //   alert('All ok');
    // }
    // ===========
    // if (this.state.name === '') {
    //   alert('Name is required');
    // } else {
    //   if (this.state.email === '') {
    //     alert('Email is required');
    //   } else {
    //     if (this.state.password.length < 8) {
    //       alert('Password must contain 8 characters');
    //     } else {
    //     }
    //   }
    // }
    //===========

    const navProps = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : this.state.email === ''
      ? alert('Email is required')
      : this.state.password.length < 8
      ? alert('Password must contain 8 characters')
      : this.props.navigation.navigate('Dashboard', navProps);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          // backgroundColor: '#aaf',
        }}>
        <NavHeader title={'Sign Up'} />

        <KeyboardAwareScrollView
          contentContainerStyle={{
            flexGrow: 2,
          }}>
          <View
            style={{
              height: '20%',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                // backgroundColor: '#aaf',
                height: 120,
                width: 120,
                borderWidth: 0.5,
                borderRadius: 60,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'red',
              }}>
              <Image
                source={require('../../assets/user.png')}
                // source={{
                //   uri: 'https://www.iconspng.com/images/young-user-icon.jpg',
                // }}
                style={{
                  resizeMode: 'contain',
                  height: '80%',
                  width: '80%',
                }}
              />
            </View>
          </View>

          {/* bottom view */}
          <View
            style={{
              // backgroundColor: '#1af',
              height: 350,
              padding: 15,
            }}>
            <AppInput
              ic={'ios-person'}
              placeholder={'Name'}
              onChangeText={txt => this.setState({name: txt})}
            />

            <AppInput
              ic={'ios-mail'}
              placeholder={'Email'}
              onChangeText={txt => this.setState({email: txt})}
              st={{
                marginTop: 10,
                marginBottom: 10,
              }}
            />

            <View
              style={{
                height: 55,
                // backgroundColor: '#faf',
                flexDirection: 'row',
                borderWidth: 0.5,
                borderRadius: 10,
              }}>
              <View
                style={{
                  height: '100%',
                  width: '15%',
                  // backgroundColor: '#aaf',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRightWidth: 0.5,
                }}>
                <Ionicons name={'lock-closed'} size={20} color={'red'} />
              </View>
              <View
                style={{
                  height: '100%',
                  width: '75%',
                  // backgroundColor: '#aaf',
                }}>
                <TextInput
                  onChangeText={txt => this.setState({password: txt})}
                  style={{
                    height: '100%',
                    width: '100%',
                    paddingLeft: 10,
                  }}
                  placeholder={'Password'}
                  secureTextEntry={this.state.secureTxt}
                />
              </View>

              {this.state.password !== '' ? (
                <TouchableOpacity
                  onPress={() =>
                    this.setState({secureTxt: !this.state.secureTxt})
                  }
                  style={{
                    height: '100%',
                    width: '10%',
                    // backgroundColor: '#aaf',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Ionicons
                    name={
                      this.state.secureTxt ? 'eye-outline' : 'eye-off-outline'
                    }
                    size={20}
                    color={'red'}
                  />
                </TouchableOpacity>
              ) : null}
            </View>

            <TouchableOpacity
              onPress={() => {
                console.warn('1');
                console.log('2');
              }}
              style={{
                marginTop: 10,
                marginLeft: 30,
              }}>
              <Text>Forget Password.! </Text>
            </TouchableOpacity>

            <View
              style={{
                // backgroundColor: '#faf',
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <AppBtn
                onPress={() => this.createUser()}
                txt={'Create Account'}
              />
            </View>
          </View>

          <View
            style={{
              // backgroundColor: '#faf',
              height: 100,
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                marginTop: 5,
              }}>
              Already have an account?{'  '}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('BasicsTwo');
              }}>
              <Text
                style={{
                  color: 'red',
                  fontSize: 18,
                  fontWeight: 'bold',
                  textDecorationLine: 'underline',
                }}>
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}
