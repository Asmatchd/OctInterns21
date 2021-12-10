import React from 'react';
import {View, Text} from 'react-native';
import {AppBtn, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';

export class DateTimePick extends React.Component {
  state = {
    date: '',
    time: '',
    showDate: false,
    showTime: false,
  };

  pickDate = date => {
    let value = moment(date.nativeEvent.timestamp).format('DD-MMM-Y');
    this.setState({date: value, showDate: false});
  };

  pickTime = time => {
    let value = moment(time.nativeEvent.timestamp).format('hh:mm a');
    this.setState({time: value, showTime: false});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Date Time Picker'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
            }}>
            <Text
              style={{
                marginBottom: h('2'),
                fontSize: h('2.7'),
                marginLeft: h('10'),
              }}>
              Selected Date is:{'     '} {this.state.date}
            </Text>
          </View>
          <AppBtn
            onPress={() => this.setState({showDate: true})}
            txt={'Date'}
          />

          <View
            style={{
              width: '100%',
            }}>
            <Text
              style={{
                marginTop: h('10'),
                marginBottom: h('2'),
                fontSize: h('2.7'),
                marginLeft: h('10'),
              }}>
              Selected Time is:{'     '} {this.state.time}
            </Text>
          </View>
          <AppBtn
            onPress={() => this.setState({showTime: true})}
            txt={'Time'}
          />
        </View>

        {this.state.showDate ? (
          <DateTimePicker
            value={new Date()}
            mode={'date'}
            onChange={date => this.pickDate(date)}
          />
        ) : this.state.showTime ? (
          <DateTimePicker
            value={new Date()}
            mode={'time'}
            // is24Hour={true}
            onChange={time => this.pickTime(time)}
          />
        ) : null}
      </View>
    );
  }
}
