import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';
import { Button, Tab, Header, Modal, Icon, Segment, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

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
    my_event_list_come: [],
    my_event_list_gone: [],
  }

  array_1 = [
    {id : 0, "title": 'ㅇㅇㅇ공연', "content" : 'test_content_1', "event_date": "2020/01/31"},
    {id : 1, "title": 'ㅁㅁㅁ공연', "content" : 'test_content_2', "event_date": "2020/01/26"},
  ]

  array_2 = [
    {id : 0, "title": 'ㅈㅈㅈ공연', "content" : 'test_content_1', "event_date": "2020/01/26"},
    {id : 1,"title": 'ㅂㅂㅂ공연', "content" : 'test_content_2', "event_date": "2020/01/31"},
  ]

  componentDidMount() {
    //this.props.checklogIn()
    //  .then(() => {
    //    this.props.getUserInfo();
        this.props.getMyEventList()
          .then(() => {
            this.setState({
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
            })
          });
        this.props.getCalendarMonth(2019, 12).then(() => {
          this.setState({ month_calendar: this.props.month_calendar });
        })
   //   })
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

  render(){
    return (
      <div>
        <h1>MyCalendar</h1>
        <Calendar days={this.props.month_calendar} />
        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
      </div>
    );
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
