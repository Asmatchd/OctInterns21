import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '123456789',
        age: '27',
        img: require('../../assets/1.jpg'),
      },
      {
        name: 'Imran',
        fName: 'Kashif',
        phone: '123450987',
        age: '37',
        img: require('../../assets/2.jpg'),
      },

      {
        name: 'kashif',
        fName: 'Umer',
        phone: '5678432',
        age: '20',
        img: require('../../assets/3.jpg'),
      },
      {
        name: 'ali',
        fName: 'Kashif',
        phone: '9876543',
        age: '16',
        img: require('../../assets/4.jpg'),
      },
    ],
    loggedIn: true,
  };

  /*   renderDesign = item => {
    if (this.state.loggedIn) {
      return (
        <View
          style={{
            height: h('8%'),
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            borderWidth: h('0.1%'),
            borderRadius: h('1%'),
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            Name: {item.name}
          </Text>
          <Text>Father Name: {item.fName}</Text>
        </View>
      );
    } else {
      return (
        <View
          style={{
            height: h('8%'),
            // backgroundColor: '#aaf',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            borderWidth: h('0.1%'),
            borderRadius: h('1%'),
          }}>
          <Text
            style={{
              fontSize: h('3%'),
            }}>
            No data
          </Text>
        </View>
      );
    }
  }; */

  renderDesign = item => (
    <View
      style={{
        height: h('11%'),
        // backgroundColor: '#aaf',
        flexDirection: 'row',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '20%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        <Image
          source={item.img}
          style={{
            height: h('10%'),
            width: h('10%'),
            resizeMode: 'cover',
            borderRadius: h('5%'),
          }}
        />
      </View>

      <View
        style={{
          height: '100%',
          width: '80%',
          // backgroundColor: '#a3a',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#af3',
            flexDirection: 'row',
          }}>
          <View
            style={{
              height: '100%',
              width: '70%',
              // backgroundColor: 'red',
              justifyContent: 'center',
              paddingLeft: h('2%'),
            }}>
            <Text>Name: {item.name}</Text>
          </View>
          <View
            style={{
              height: '100%',
              width: '30%',
              // backgroundColor: 'green',
              justifyContent: 'center',
            }}>
            <Text>Age: {item.age}</Text>
          </View>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#a81',
            justifyContent: 'center',
            paddingLeft: h('2%'),
          }}>
          <Text>Phone: {item.phone}</Text>
        </View>
      </View>
    </View>
  );

  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'List'}
          rightIc={'ios-arrow-forward'}
          rightPressed={() => {
            this.setState({loggedIn: !this.state.loggedIn});
          }}
        />
        <FlatList
          style={{
            margin: h('1'),
          }}
          data={this.state.data}
          renderItem={({item}) => this.renderDesign(item)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
