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
    return (
      <div style={style, {width : '150px', height: '160px', border: '1px solid grey'}} onClick={this.toggleDayEventList}>
        {this.props.date}
        <ul>{events}</ul>
        {modal}
      </div>
    );
  }
}

export default Day;
