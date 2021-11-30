import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class MultiList extends React.Component {
  state = {
    data: [
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '123456789',
        age: '27',
        dob: '10-10-2000',
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
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '123456789',
        age: '27',
        dob: '10-10-2000',
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
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '123456789',
        age: '27',
        dob: '10-10-2000',
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
      {
        name: 'Ali',
        fName: 'Umer',
        phone: '123456789',
        age: '27',
        dob: '10-10-2000',
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
    num: 1,
  };

  renderDesign = (item, index) => (
    <TouchableOpacity
      onPress={() => {
        console.warn(index);
      }}
      style={{
        height: this.state.num === 1 ? h('20%') : h('10%'),
        width:
          this.state.num === 1
            ? '100%'
            : this.state.num === 2
            ? w('47%')
            : this.state.num === 3
            ? w('30%')
            : w('23%'),
        // backgroundColor: '#faf',
        margin: h('0.5%'),
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <Image
        source={item.img}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
        }}
      />
    </TouchableOpacity>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Multi List'}
          leftIc={'ios-list'}
          leftPressed={() => {
            this.props.navigation.openDrawer();
          }}
        />

        <View
          style={{
            height: h('10%'),
            // backgroundColor: '#faf',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.setState({num: 1});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('1%'),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: h('4%'),
              }}>
              1
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 2});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('1%'),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: h('4%'),
              }}>
              2
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 3});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('1%'),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: h('4%'),
              }}>
              3
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.setState({num: 4});
            }}
            style={{
              height: '60%',
              width: '20%',
              backgroundColor: 'red',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: h('1%'),
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: h('4%'),
              }}>
              4
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          key={
            this.state.num === 1
              ? '1'
              : this.state.num === 2
              ? '2'
              : this.state.num === 3
              ? '3'
              : '4'
          }
          numColumns={
            this.state.num === 1
              ? 1
              : this.state.num === 2
              ? 2
              : this.state.num === 3
              ? 3
              : 4
          }
          data={this.state.data}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          keyExtractor={(index, item) => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
