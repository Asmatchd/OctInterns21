import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
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
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            flex: 1,
            // backgroundColor: '#aaf',
          }}>
          {/* spacer */}
          <View
            style={{
              height: '15%',
              //   backgroundColor: '#faf',
            }}
          />
          {/* top view */}
          <View
            style={{
              //   backgroundColor: '#a4a',
              paddingLeft: 15,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontWeight: 'bold',
                color: '#000',
              }}>
              Welcome
            </Text>

            <Text
              style={{
                fontSize: 18,
                color: '#000',
              }}>
              glad to see you!
            </Text>
          </View>

          {/* spacer */}
          <View
            style={{
              height: '10%',
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
            />

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
              <TouchableOpacity
                // onPress={this.sendData}
                // onPress={() => {
                //   const param = 'Study';
                //   const param2 = 'Study2';
                //   this.sendData(param, param2);
                // }}

                onPress={() => this.createUser()}
                style={{
                  backgroundColor: '#000',
                  height: 50,
                  width: '70%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 7,
                }}
                // disabled
              >
                <Text
                  style={{
                    color: '#fff',
                  }}>
                  Create Account
                </Text>
              </TouchableOpacity>
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
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
