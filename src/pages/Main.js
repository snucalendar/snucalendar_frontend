import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getCalendarDate: (year, month, date) => dispatch(actionCreators.getCalendarDate(year, month, date)),
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)),
});

export const mapStateToProps = (state) => ({
  date_calendar: state.cd.date_calendar,
  month_calendar: state.cd.month_calendar,
})

export class Main extends Component {
  state = {
    date_calendar: {},
    month_calendar: [],
    event_list: [],
  }


  componentDidMount() {
    this.props.getCalendarMonth(2019, 12)
      .then(() => {
        this.setState({
          month_calendar: this.props.month_calendar
          .map((ev, index) => (
            <Calendar
              key = {index}
              year = {ev.year}
              month = {ev.month}
              date = {ev.date}
              events = {ev.events}
            />
          )),
          event_list: this.props.month_calendar
          .filter((event) => (1<= event.date && event.date<= 7))
          .map((date) => { return date.events; })
          .map((ev, index) => (
            <Event
              title = {ev.title}
              year = {ev.year}
              month = {ev.month}
              date = {ev.date}
              time = {ev.time}
              events = {ev.events}
            />
          ))
        })
        })
  }

  render(){
    return (
      <div>
        <h1>Main</h1>
        {this.state.month_calendar}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
