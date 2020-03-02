import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';
import Header from '../components/Header';
import './Main.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)),
});

export const mapStateToProps = (state) => ({
  month_calendar: state.cd.month_calendar,
});

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

export class Main extends Component {
  state = {
    month_calendar: [],
    event_list: [],
    currentYear,
    currentMonth,
    event_list: [],
    //eventClicked:false,
    //modalEvent: event,
  };

  componentDidMount() {
    this.props.getCalendarMonth(this.state.currentYear, this.state.currentMonth)
      .then(() => {
        this.setState({
          month_calendar: this.props.month_calendar
        });

        var now =new Date();
        var NowDate = Number(now.getDate());
        this.setState({
          event_list: this.props.month_calendar
            .filter((event) => (NowDate <= event.date && event.date<= NowDate+6))
            .map(date => date.events
            .map((ev, index) => (
              <Event
                title = {ev.title}
                date = {ev.date}
                time = {ev.time}
            //    eventClicked = {this.manageModal}
              />
            )))
        });

      });
  }
/*
  manageModal = (title, event) => {
    //do something to make modal
  }
*/
  changeMonth = (e) => {
    const increment = e.target.dataset.increment === 'plus' ? 1 : -1;
    let newYear = this.state.currentYear;
    let newMonth = this.state.currentMonth + increment;

    if (newMonth > 12) {
      newYear++;
      newMonth = newMonth - 12;
    } else if (newMonth < 1) {
      newYear--;
      newMonth = newMonth + 12;
    }

    this.props.getCalendarMonth(newYear, newMonth)
      .then(() => {
        this.setState({
          currentYear: newYear, // 이걸 이런 식으로 업데이트하는 게 맞나 모르겠네,,
          currentMonth: newMonth,
          month_calendar: this.props.month_calendar
          .map((ev, index) => (
            <Calendar
              key = {index}
              year = {ev.year}
              month = {ev.month}
              date = {ev.date}
              events = {ev.events}
            />
          ))
        })

        var now =new Date();
        var NowDate = Number(now.getDate());
        this.setState({
          event_list: this.props.month_calendar
          .filter((event)=> (NowDate <= event.date && event.date <= NowDate+6))
          .map((date) => date.events
          .map((ev, index) => (
            <Event
              title = {ev.title}
              date = {ev.date}
              time = {ev.time}
            />
          )))
        })
      })
  }



  render() {
    
    const firstDay = new Date(this.state.currentYear, this.state.currentMonth-1, 1).getDay();
    return (
      <div>
      <Header menu="Calendar"/>
      <div style={{'marginTop' : 20, marginRight : 'auto', marginLeft : 'auto'}}>
        <h1 style = {{textAlign:'center'}}></h1>
        <Calendar month={this.state.currentMonth} days={this.props.month_calendar} changeMonth={this.changeMonth} firstDay={firstDay} /> <br />
        <div style = {{width : 1100, marginLeft : 'auto', marginRight : 'auto'}}>
          <div class="dropdown">
            <p class = "dropbtn">
              가나다순 <i class="fa fa-angle-down" />
            </p>
            <div class="dropdown-content">
              <a>임박순</a>
              <a>인기순</a>
            </div>
          </div>
          {this.state.event_list}
        </div>
      </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
