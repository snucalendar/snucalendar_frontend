import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  checklogIn: () => dispatch(actionCreators.checklogIn()),
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)), // 내가 등록한 이벤트만 가져올 수 있는 api가 필요함
  getMyEventList: () => dispatch(actionCreators.getMyEventList()),
});

export const mapStateToProps = (state) => ({
  month_calendar: state.cd.month_calendar,
  my_event_list: state.evl.myEvent_list,
})

export class MyCalendar extends Component {
  state = {
    month_calendar: [],
    my_event_list : [],
  }

  componentDidMount() {
    this.props.checklogIn()
      .then(() => {
        this.props.getUserInfo();
        this.props.getMyEventList()
          .then(() => {
            this.setState({
              my_event_list: this.props.my_event_list
                .map((ev, index) => (
                  <Event
                    key = {index}
                    title = {ev.title}
                    content = {ev.content}
                  />
                ))
            })
          });
        this.props.getCalendarMonth(2019, 12).then(() => {
          this.setState({ month_calendar: this.props.month_calendar });
        })
      })
  }

  render(){
    return (
      <div>
        <h1>MyCalendar</h1>
        <Calendar days={this.props.month_calendar} />
        {this.state.my_event_list}
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
