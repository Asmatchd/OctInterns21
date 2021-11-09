import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export class EditProfile extends React.Component {
  state = {
    name: '',
    password: '',
    user: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({
      user: navProps,
      name: navProps.name,
      password: navProps.password,
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
              Edit Profile
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
              value={this.state.user.email}
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

            <View
              style={{
                // backgroundColor: '#faf',
                marginTop: 40,
                width: '100%',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => this.props.navigation.replace('Dashboard')}
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
                  Update
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
