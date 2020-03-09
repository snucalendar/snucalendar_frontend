import React, { Component } from 'react';
import DayEventList from '../DayEventList/DayEventList';
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

    const modal = this.state.isClicked && this.props.events.length ? <DayEventList year={this.props.year} month={this.props.month} date={this.props.date} events={this.props.events} toggleDayEventList={this.toggleDayEventList} /> : null;
    const colStart = this.props.isFirst ? this.props.firstDay+1 : 'auto'
    return (
      <a style={{gridColumnStart : colStart, width:'(100/7)vw', height: 'auto', border: '0.01px solid #A57E7E'}} onClick={this.toggleDayEventList}>
        <span style = {{'font-size':'1rem'}}><p style={{'text-align':'center'}}>{this.props.date}</p></span>
        <div style = {{ width : '100%','font-size':'0.5rem' }}>{events}{events2}</div>
        {modal}
      </a>
    );
  }
}

export default Day;
