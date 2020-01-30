import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';
import { Tab, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)),
  getMyEventList: () => dispatch(actionCreators.getMyEventList()),
});

export const mapStateToProps = (state) => ({
  month_calendar: state.cd.month_calendar,
  myEvent_list: state.cd.myEvent_list,
});

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

export class Main extends Component {
  state = {
    month_calendar: [],
    currentYear,
    currentMonth,
    myEvent_list: [],
    my_event_list : [],
    my_event_list_come: [],
    my_event_list_gone: [],
  };

  array_1 = [
    {id : 0, "title": 'ㅇㅇㅇ공연', "content" : 'test_content_1', "event_date": "2020/01/31"},
    {id : 1, "title": 'ㅁㅁㅁ공연', "content" : 'test_content_2', "event_date": "2020/01/26"},
  ]

  array_2 = [
    {id : 0, "title": 'ㅈㅈㅈ공연', "content" : 'test_content_1', "event_date": "2020/01/26"},
    {id : 1,"title": 'ㅂㅂㅂ공연', "content" : 'test_content_2', "event_date": "2020/01/31"},
  ]

  componentDidMount() {
    this.props.getCalendarMonth(this.state.currentYear, this.state.currentMonth)
      .then(() => {
        this.setState({
          month_calendar: this.props.month_calendar
        });
      });

    this.props.getMyEventList()
      .then(() => {
        this.setState({
          myEvent_list: this.props.myEvent_list,
          my_event_list_come: this.array_1
            .map((ev, index) => (
              <Event
                key = {index}
                title = {ev.title}
                content = {ev.content}
              />
            )),
          my_event_list_gone: this.array_2
            .map((ev, index) => (
              <Event
                key = {index}
                title = {ev.title}
                content = {ev.content}
              />
            )),
        });
      });
  }

  panes = [
    {
      menuItem: '다가오는',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.state.my_event_list_come}
                      </List>
                    </Tab.Pane>,
    },
    {
      menuItem: '이미참여',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.state.my_event_list_gone}
                      </List>
                    </Tab.Pane>,
    },
  ]

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
        });
      });
  }

  render() {
    const a = this.state.myEvent_list.filter((event) => {
      const [year, month, day] = event.date.split(':');
      return year == this.state.currentYear && month == this.state.currentMonth;
    });
    const firstDay = new Date(this.state.currentYear, this.state.currentMonth-1, 1).getDay();

    return ( // 아예 Calendar에서 날짜와 이벤트를 받아오는 게 나을 수도...?
      <div style={{'marginTop' : 30}}>
        <h1>Main</h1>
        <Calendar month={this.state.currentMonth} days={this.props.month_calendar} changeMonth={this.changeMonth} firstDay={firstDay} />
        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
