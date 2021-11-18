import React from 'react';
import {View, Text, Image} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class DetailsScreen extends React.Component {
  state = {
    data: {},
  };

  componentDidMount = () => {
    const navProps = this.props.route.params;
    this.setState({data: navProps});
    console.warn(navProps);
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Details'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            height: h('15%'),
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={this.state.data.img}
            style={{
              height: h('13%'),
              width: h('13%'),
              resizeMode: 'cover',
              borderRadius: h('7%'),
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: h('8%'),
            // backgroundColor: '#faf',
            marginTop: h('5'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text
              style={{
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              Name
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              {this.state.data.name}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: h('8%'),
            // backgroundColor: '#faf',
            marginTop: h('5'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text
              style={{
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              Father Name
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              {this.state.data.fName}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: h('8%'),
            // backgroundColor: '#faf',
            marginTop: h('5'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text
              style={{
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              Date Of Birth
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              {this.state.data.dob}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: h('8%'),
            // backgroundColor: '#faf',
            marginTop: h('5'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text
              style={{
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              Age
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              {this.state.data.age}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            height: h('8%'),
            // backgroundColor: '#faf',
            marginTop: h('5'),
            borderWidth: h('0.1'),
          }}>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
              borderRightWidth: h('0.1'),
            }}>
            <Text
              style={{
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              Phone
            </Text>
          </View>
          <View
            style={{
              width: '50%',
              //   backgroundColor: '#aaf',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: 'red',
                fontSize: h('3'),
                fontWeight: 'bold',
              }}>
              {this.state.data.phone}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
