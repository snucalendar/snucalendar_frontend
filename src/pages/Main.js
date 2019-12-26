import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getEventList: () => dispatch(actionCreators.getEventList()),
});

export const mapStateToProps = (state) => ({
  event_list: state.evl.event_list,
})

export class Main extends Component {
  state = {
    event_list : [],
  }


  componentDidMount() {
    this.props.getEventList()
      .then(() => {
        this.setState({
          event_list: this.props.event_list
            .map((ev, index) => (
              <Event
                key = {index}
                title = {ev.title}
                content = {ev.content}
              />
            ))
        })
      })
  }

  render(){
    return (
      <div>
        <h1>Main</h1>
        <Calendar /> <br />
        {this.state.event_list}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
