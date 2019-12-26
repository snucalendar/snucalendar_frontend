import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  checklogIn: () => dispatch(actionCreators.checklogIn()),
  getMyEventList: () => dispatch(actionCreators.getMyEventList()),
  
});

export const mapStateToProps = (state) => ({
  my_event_list: state.evl.myEvent_list,
})

export class MyCalendar extends Component {
  state = {
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
          })
      })
      /*
      .catch(() => {
        window.location.assign('/');
      });
      */
    
  }

  render(){
    return (
      <div>
        <h1>MyCalendar</h1>
        <Calendar />
        {this.state.my_event_list}
      </div>
    );
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCalendar);
