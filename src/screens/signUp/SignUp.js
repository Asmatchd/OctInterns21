import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Modal,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {AppBtn, AppInput, NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import validator from 'email-validator';

export class SignUp extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    secureTxt: true,

    modalVisible: false,
    inEmail: '',
    inPassword: '',
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

    const res = validator.validate(this.state.email);
    const data = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    };

    this.state.name === ''
      ? alert('Name is required')
      : // : !res
      res === false
      ? alert('Invalid Email')
      : this.state.password.length < 8
      ? alert('Password must contain 8 characters')
      : AsyncStorage.setItem('userData', JSON.stringify(data), () => {
          Alert.alert(
            'Alert....',
            'Your account have been created successfully please Sign in',
            [
              {
                text: 'No',
              },
              {text: 'Yes', onPress: () => this.setState({modalVisible: true})},
            ],
          );
        });
  };

  signIn = () => {
    AsyncStorage.getItem('userData', (err, res) => {
      if (!err && res !== null) {
        const data = JSON.parse(res);
        if (data.email === this.state.inEmail) {
          if (data.password === this.state.inPassword) {
            this.props.navigation.replace('TabNavigator');
          } else {
            alert('Incorrect password');
          }
        } else {
          alert('Invalid email');
        }
      }
    });
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
                this.setState({modalVisible: true});
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

        <Modal
          animationType="slide"
          // animationType="fade"
          // transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setState({modalVisible: false});
          }}>
          <View
            style={{
              flex: 1,
              // backgroundColor: '#faf',
            }}>
            <NavHeader
              title={'Sign In'}
              leftIc={'ios-arrow-back'}
              leftPressed={() => {
                this.setState({modalVisible: false});
              }}
            />

            <KeyboardAwareScrollView
              contentContainerStyle={{
                flexGrow: 2,
                // justifyContent: 'center',
              }}>
              {/* bottom view */}

              <View
                style={{
                  height: h('5%'),
                }}
              />
              <View
                style={{
                  // backgroundColor: '#faf',
                  padding: h('2.5%'),
                  flex: 1,
                }}>
                <AppInput
                  ic={'ios-mail'}
                  placeholder={'Email'}
                  onChangeText={txt => this.setState({inEmail: txt})}
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
                      onChangeText={txt => this.setState({inPassword: txt})}
                      style={{
                        height: '100%',
                        width: '100%',
                        paddingLeft: 10,
                      }}
                      placeholder={'Password'}
                      secureTextEntry={this.state.secureTxt}
                    />
                  </View>

                  {this.state.inPassword !== '' ? (
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
                          this.state.secureTxt
                            ? 'eye-outline'
                            : 'eye-off-outline'
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
                  <AppBtn onPress={() => this.signIn()} txt={'Sign In'} />
                </View>

                <View
                  style={{
                    // backgroundColor: '#aaf',
                    height: 70,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      marginTop: 5,
                    }}>
                    Don't have an account?{'  '}
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      this.setState({modalVisible: false});
                    }}>
                    <Text
                      style={{
                        color: 'red',
                        fontSize: 18,
                        fontWeight: 'bold',
                        textDecorationLine: 'underline',
                      }}>
                      Sign Up
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </View>
        </Modal>
      </View>
    );
  }
}
