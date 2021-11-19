import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class ColumnList extends React.Component {
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
  };

  renderDesign = (item, index) => (
    <View
      style={{
        height: h('10%'),
        width: w('70%'),
        // backgroundColor: '#faf',
        marginRight: h('2%'),
        marginLeft: index === 0 ? h('2%') : 0,

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
            height: h('9%'),
            width: h('9%'),
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

  renderColumn = item => (
    <View
      style={{
        height: h('10%'),
        width: w('47%'),
        // backgroundColor: '#faf',
        marginLeft: h('1%'),
        marginBottom: h('2%'),

        flexDirection: 'row',

        borderWidth: h('0.1%'),
        borderRadius: h('1%'),
        borderColor: 'grey',
      }}>
      <View
        style={{
          height: '100%',
          width: '30%',
          // backgroundColor: '#faf',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}>
        <Image
          source={item.img}
          style={{
            height: h('7%'),
            width: h('7%'),
            resizeMode: 'cover',
            borderRadius: h('4%'),
          }}
        />
      </View>

      <View
        style={{
          height: '100%',
          width: '70%',
          // backgroundColor: '#a3a',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#af3',
            justifyContent: 'center',
            paddingLeft: h('1%'),
          }}>
          <Text>Name: {item.name}</Text>
        </View>
        <View
          style={{
            height: '50%',
            width: '100%',
            // backgroundColor: '#a81',
            justifyContent: 'center',
            paddingLeft: h('1%'),
          }}>
          <Text>Phone: {item.phone}</Text>
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader title={'Column List'} />
        <View
          style={{
            height: h('10%'),
            marginTop: h('2%'),
          }}>
          <FlatList
            horizontal
            data={this.state.data}
            renderItem={({item, index}) => this.renderDesign(item, index)}
            keyExtractor={(index, item) => item.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View
          style={{
            height: h('5%'),
            // backgroundColor: '#faf',
          }}
        />

        <FlatList
          numColumns={2}
          data={this.state.data}
          renderItem={({item, index}) => this.renderColumn(item, index)}
          keyExtractor={(index, item) => item.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
