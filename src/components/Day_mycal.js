import React, { Component } from 'react';
import DayEventList from './DayEventList';
import './Day.css';

class Day_mycal extends Component {
  state = {
    isClicked: false,
  }

  toggleDayEventList = (e) => {
    e.stopPropagation();
    this.setState({ isClicked: e.target.id === 'background' ? false : true })
  }

  render() {
    var now = new Date();
    var NowDate = Number(now.getDate());

    const events = this.props.interested_events
      .filter(e => Number(e.date.substr(e.date.length - 2))  >= NowDate)
      .map(e => <p class="event">{e.title}</p>);

    const events2 = this.props.participated_events
      .filter(e => Number(e.date.substr(e.date.length - 2))  < NowDate)
      .map(e => <p class="event_study">{e.title}</p>);
    
    const modal = this.state.isClicked && this.props.interested_events.length ?
      <DayEventList events={this.props.interested_events} toggleDayEventList={this.toggleDayEventList} /> :
        (this.state.isClicked && this.props.participated_events.length ?
          <DayEventList events={this.props.participated_events} toggleDayEventList={this.toggleDayEventList} /> :
            null);

    const style = this.props.isFirst ? {gridColumnStart: this.props.firstDay+1} : null;
    return (
      <a style={style, { width : '150px', height: '160px', border: '0.01px solid #A57E7E'}} onClick={this.toggleDayEventList}>
        <span style = {{'font-size':'2em'}}><p style={{'text-align':'left', marginLeft: '10px'}}>{this.props.date}</p></span>
        <p>{events}</p>
        <p style={{marginTop: '-10px'}}>{events2}</p>
        {modal}
      </a>
    );
  }
}

export default Day_mycal;
