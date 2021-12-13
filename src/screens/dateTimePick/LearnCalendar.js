import React from 'react';
import {View, Text} from 'react-native';
import {AppBtn, NavHeader} from '../../components';
import {
  widthPercentageToDP as w,
  heightPercentageToDP as h,
} from 'react-native-responsive-screen';
import moment from 'moment';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Calendar} from 'react-native-calendars';

export class LearnCalendar extends React.Component {
  state = {
    date: '',
    allDates: ['2021-12-14', '2021-12-15', '2021-12-24'],
    markedDates: {},
  };

  componentDidMount = () => {
    this.mark(this.state.allDates);
  };

  mark = dates => {
    let markedDate = [];

    // '2012-05-16': { marked: true},

    dates.forEach(item => {
      markedDate = {...markedDate, [item]: {marked: true}};
    });

    markedDate = {
      ...markedDate,
      [this.state.date]: {selected: true, marked: true},
    };

    this.setState({markedDates: markedDate});
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <NavHeader
          title={'Calendar'}
          leftIc={'ios-arrow-back'}
          leftPressed={() => {
            this.props.navigation.goBack();
          }}
        />

        <Calendar
          onDayPress={day => {
            this.setState(
              {
                date: day.dateString,
              },
              () => {
                this.mark(this.state.allDates);
              },
            );
          }}
          markedDates={this.state.markedDates}
          //   minDate={moment(new Date() - 1).format('YYYY-MM-DD')}
          //   maxDate={'2021-12-20'}
          theme={{
            backgroundColor: '#fff',
            calendarBackground: '#fff',
            textSectionTitleColor: 'green',
            selectedDayBackgroundColor: 'red',
            selectedDayTextColor: '#fff',
            todayTextColor: '#fff',
            todayBackgroundColor: 'grey',

            dayTextColor: 'black',
            textDisabledColor: '#d9e1e8',
            dotColor: 'blue',
            selectedDotColor: '#fff',
            arrowColor: 'blue',
            monthTextColor: 'red',
            textDayFontSize: h('2'),
            textMonthFontSize: h('2'),
            textDayHeaderFontSize: h('2'),
          }}
        />
      </View>
    );
  }
}
