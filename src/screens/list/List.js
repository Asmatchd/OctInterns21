import React from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import {AppInput, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';

export class List extends React.Component {
  state = {
    data: [
      {
        name: 'Haseeb',
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
    filteredData: [
      {
        name: 'Haseeb',
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

  renderDesign = (item, index) => (
    <TouchableOpacity
      onPress={() => {
        this.props.navigation.navigate('DetailsScreen', item);
      }}
      // onPress={() => console.warn(index)}
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
    </TouchableOpacity>
  );

  separator = () => (
    <View
      style={{
        height: h('1%'),
      }}
    />
  );

  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.fName.toUpperCase()} ${
        item.phone
      }`;
      const searchTxt = txt.toUpperCase();
      return itemData.indexOf(searchTxt) > -1;
    });
    this.setState({filteredData: newData});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'List'}
          // rightIc={'ios-arrow-forward'}
          // rightPressed={() => {
          //   this.setState({loggedIn: !this.state.loggedIn});
          // }}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <AppInput
          ic={'search'}
          placeholder={'Search Here'}
          st={{
            marginTop: h('1%'),
          }}
          onChangeText={txt => this.searchFilterFunction(txt)}
        />

        <FlatList
          // inverted
          style={{
            margin: h('1'),
          }}
          data={this.state.filteredData}
          renderItem={({item, index}) => this.renderDesign(item, index)}
          ItemSeparatorComponent={() => this.separator()}
          keyExtractor={(index, item) => item.toString()}
        />
      </View>
    );
  }
}
