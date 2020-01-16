import React, { Component } from 'react';
import CalendarEventListModal from './CalendarEventListModal';

class Day extends Component {
  state = {
    isClicked: false,
  }

  handleClick = (e) => {
    console.log(this.props.events)
  }

  render() {
    const events = this.props.events.map((e, i) => <li key={i}>{e.title}</li>);
    const modal = this.state.isClicked ? <CalendarEventListModal events={this.props.events} /> : null;
    return (
      <div onClick={this.handleClick}>
        {this.props.date}일
        <ul>{events}</ul>
        {modal}
      </div>
    );
  }
}

export default Day;
