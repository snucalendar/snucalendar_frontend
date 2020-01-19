import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)),
});

export const mapStateToProps = (state) => ({
  month_calendar: state.cd.month_calendar,
});

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

export class Main extends Component {
  state = {
    month_calendar: [],
    event_list: [],
    currentYear,
    currentMonth,
  };

  componentDidMount() {
    this.props.getCalendarMonth(this.state.currentYear, this.state.currentMonth)
      .then(() => {
        this.setState({
          month_calendar: this.props.month_calendar
        });
      });
  }

  changeMonth = (e) => {
    const increment = e.target.dataset.increment === 'plus' ? 1 : -1;
    let newYear = this.state.currentYear;
    let newMonth = this.state.currentMonth + increment;

    if (newMonth > 12) {
      newYear++;
      newMonth = newMonth - 12;
    } else if (newMonth < 1) {
      newYear--;
      newMonth = newMonth + 12;
    }

    this.props.getCalendarMonth(newYear, newMonth)
      .then(() => {
        this.setState({
          currentYear: newYear, // 이걸 이런 식으로 업데이트하는 게 맞나 모르겠네,,
          currentMonth: newMonth,
          month_calendar: this.props.month_calendar
          .map((ev, index) => (
            <Calendar
              key = {index}
              year = {ev.year}
              month = {ev.month}
              date = {ev.date}
              events = {ev.events}
            />
          ))
        })
        this.setState({
          event_list: this.props.month_calendar
          .filter((event)=> (1 <= event.date && event.date <= 7))
          .map((date) => date.events
          .map((ev, index) => (
            <Event
              key = {index}
              title = {ev.title}
            />
          )))
        })
      })
  }

  render() {
    console.log(document.cookies)
    return ( // 아예 Calendar에서 날짜와 이벤트를 받아오는 게 나을 수도...?
      <div style={{'marginTop' : 30}}>
        <h1>Main</h1>
        <Calendar month={this.state.currentMonth} days={this.props.month_calendar} changeMonth={this.changeMonth} /> <br />
        {this.state.event_list}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
