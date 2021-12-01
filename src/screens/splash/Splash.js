import React from 'react';
import {View, Image} from 'react-native';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export class Splash extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      AsyncStorage.getItem('userData', (err, res) => {
        if (!err && res !== null) {
          this.props.navigation.replace('TabNavigator');
        } else {
          this.props.navigation.replace('SignUp');
        }
      });
    }, 2000);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'red',
        }}>
        <Image
          style={{
            height: h('20%'),
            resizeMode: 'contain',
          }}
          source={require('../../assets/logo.png')}
        />
      </View>
    );
  }
}
