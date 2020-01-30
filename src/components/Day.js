import React, { Component } from 'react';
import DayEventList from './DayEventList';

class Day extends Component {
  state = {
    isClicked: false,
  }

  toggleDayEventList = (e) => {
    e.stopPropagation();
    this.setState({ isClicked: e.target.id === 'background' ? false : true })
  }

  render() {
    const events = this.props.events.map((e, i) => <li key={i}>{e.title}</li>);
    const modal = this.state.isClicked && this.props.events.length ? <DayEventList events={this.props.events} toggleDayEventList={this.toggleDayEventList} /> : null;
    const style = this.props.isFirst ? {gridColumnStart: this.props.firstDay+1} : null;
    console.log(111111, this.props.firstDay)
    return (
      <div style={style} onClick={this.toggleDayEventList}>
        {this.props.date}일
        <ul>{events}</ul>
        {modal}
      </div>
    );
  }
}

export default Day;
