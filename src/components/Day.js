import React, { Component } from 'react';
import DayEventList from './DayEventList';
import './Day.css';

class Day extends Component {
  state = {
    isClicked: false,
  }

  toggleDayEventList = (e) => {
    e.stopPropagation();
    this.setState({ isClicked: e.target.id === 'event_modal_background' ? false : true })
  }

  render() {
    const events = this.props.events
    .filter(e => e.event_type === 'club')
    .map(e => <p class="event">{e.title}</p>);
    const events2 = this.props.events
    .filter(e => e.event_type === 'study')
    .map(e => <p class="event_study">{e.title}</p>);
    const modal = this.state.isClicked && this.props.events.length ? <DayEventList date = {this.props.date} events={this.props.events} toggleDayEventList={this.toggleDayEventList} /> : null;
    const colStart = this.props.isFirst ? this.props.firstDay+1 : 'auto'
    return (
      <a style={{gridColumnStart : colStart, width : '150px', height: '160px', border: '0.01px solid #A57E7E'}} onClick={this.toggleDayEventList}>
        <span style = {{'font-size':'2em'}}><p style={{'text-align':'left', marginLeft: '10px'}}>{this.props.date}</p></span>
        <p>{events}</p>
        <p style={{marginTop: '-10px'}}>{events2}</p>
        {modal}
      </a>
    );
  }
}

export default Day;
