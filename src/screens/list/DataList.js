import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Alert,
} from 'react-native';
import {AppInput, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {baseUrl, axiosInstance} from '../../services/Api';

export class DataList extends React.Component {
  state = {
    data: [],
    filteredData: [],
  };

  componentDidMount = () => {
    this.signUp();
  };

  signUp = () => {
    axiosInstance
      .post(baseUrl + 'users/allUsers')
      .then(res => {
        const data = res.data;
        if (data.status === '200') {
          this.setState({
            data: data.allUsers,
            filteredData: data.allUsers,
          });
        } else {
          alert(data.msg);
        }
      })
      .catch(() => {
        alert('Network Error');
      });
  };

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
          width: '90%',
          // backgroundColor: '#a3a',
        }}>
        <View
          style={{
            height: '50%',
            width: '100%',
            paddingLeft: h('2%'),
            justifyContent: 'center',
          }}>
          <Text>Name: {item.name}</Text>
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

      <View
        style={{
          height: '100%',
          width: '10%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Ionicons name={'trash'} size={h('3.5%')} color={'red'} />
      </View>
    </View>
  );

  searchFilterFunction = txt => {
    const newData = this.state.data.filter(item => {
      const itemData = `${item.name.toUpperCase()} ${item.phone}`;
      const searchTxt = txt.toUpperCase();
      return itemData.indexOf(searchTxt) > -1;
    });
    this.setState({filteredData: newData});
  };

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
