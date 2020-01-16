import React, { Component } from 'react';
import DayEventList from './DayEventList';

class Day extends Component {
  state = {
    isClicked: false,
  }

  handleClick = (e) => {
    this.setState({ isClicked: e.target.id === 'background' ? false : true })
  }

  render() {
    const events = this.props.events.map((e, i) => <li key={i}>{e.title}</li>);
    const modal = this.state.isClicked ? <DayEventList events={this.props.events} handleClick={this.handleClick} /> : null;
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
