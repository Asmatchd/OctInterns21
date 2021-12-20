import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {NavHeader} from '../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DeviceInfo from 'react-native-device-info';

export class Dashboard extends React.Component {
  state = {
    name: '',
    email: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    // this.deviceData();
    AsyncStorage.getItem('userData', (err, res) => {
      if (!err && res !== null) {
        const data = JSON.parse(res);
        this.setState({
          user: data,
          name: data.name,
          email: data.email,
          password: data.password,
        });
      }
    });
  };

  deviceData = () => {
    // let res = DeviceInfo.getBundleId();
    // let res = DeviceInfo.getBuildNumber();
    // let res = DeviceInfo.getDeviceId();
    let res = DeviceInfo.getVersion();
    console.warn(res);
  };

  render() {
    const navigation = this.props.navigation;

    return (
      <ImageBackground
        source={require('../../assets/bg.jpg')}
        style={{
          flex: 1,
          //   backgroundColor: '#faf',
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#0007',
          }}>
          <NavHeader
            title={'Dashboard'}
            leftIc={'ios-list'}
            leftPressed={() => {
              navigation.openDrawer();
            }}
            rightIc={'exit-outline'}
            rightPressed={() => {
              AsyncStorage.removeItem('userData', () => {
                this.props.navigation.replace('SignUp');
              });
            }}
            custom
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
                this.props.navigation.navigate('List');
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
              <Text
                style={{
                  color: '#fff',
                }}>
                List
              </Text>
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
                navigation.navigate('ImgPick');
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
              <Text
                style={{
                  color: '#fff',
                }}>
                Image Picker
              </Text>
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
                this.props.navigation.navigate('ColumnList');
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
              <Text
                style={{
                  color: '#fff',
                }}>
                Column List
              </Text>
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
              <Text
                style={{
                  color: '#fff',
                }}>
                Edit Profile
              </Text>
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
                this.props.navigation.navigate('DateTimePick');
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
              <Text
                style={{
                  color: '#fff',
                }}>
                Date Time Picker
              </Text>
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
                this.props.navigation.navigate('LearnCalendar');
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
              <Text
                style={{
                  color: '#fff',
                }}>
                Calendar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
