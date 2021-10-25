import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class BasicsTwo extends React.Component {
  render() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 2,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            flex: 1,
          }}>
          <View
            style={{
              height: 200,
              backgroundColor: '#fa32',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                // height: 100,
                width: '70%',
                borderColor: 'red',
                // borderLeftColor: 'red',
                // borderRightColor: 'red',
                // borderTopColor: 'red',
                // borderBottomColor: 'red',
                borderWidth: 1,
                // borderLeftWidth: 2,
                // borderRightWidth: 2,
                // borderTopWidth: 2,
                // borderBottomWidth: 2,
                // borderRadius: 15,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 10,
                paddingLeft: 20,
                maxHeight: 80,

                color: 'blue',
                fontSize: 20,
                fontWeight: 'bold',
              }}
              placeholder={'Enter Name'}
              placeholderTextColor={'red'}
              // underlineColorAndroid={'#000'}
              multiline={true}
              numberOfLines={4}
              // maxLength={4}
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: '#aaf',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Ionicons name={'mail'} size={25} color={'red'} />
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 20,
                marginLeft: 10,
              }}
              placeholder={'Email'}
              keyboardType={'email-address'}
              value={'study@gmail.com'}
              // editable={false}
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: '#a3a2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 20,
              }}
              placeholder={'Password'}
              secureTextEntry
            />
          </View>

          <View
            style={{
              height: 100,
              backgroundColor: '#aa2',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TextInput
              style={{
                backgroundColor: '#fff',
                width: '70%',
                borderColor: 'red',
                borderWidth: 1,
                borderRadius: 10,
                paddingLeft: 20,
              }}
              placeholder={'Phone'}
              maxLength={11}
              keyboardType={'phone-pad'}
            />
          </View>

          <View
            style={{
              height: 150,
              backgroundColor: '#faf',
            }}>
            <Ionicons name={'mail'} size={40} color={'red'} />
          </View>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
