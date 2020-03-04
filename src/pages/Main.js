import React, { Component, createRef } from 'react';
import { Ref } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Calendar from '../components/Calendar';
import Event from '../components/Event';
import HeaderPart from '../components/Header';
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
    event_list_byletter: [],
    event_list_byletter_temp: [],
    events_temp: [],
    isClicked: 'byletter',
    //eventClicked:false,
    //modalEvent: event,
  };
  contextRef = createRef()

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
                key = {index}
                title = {ev.title}
                date = {ev.date}
                time = {ev.time}
            //    eventClicked = {this.manageModal}
              />
            )))
        })
      
      this.setState({
        event_list_byletter_temp: this.props.month_calendar
          .filter((event) => (NowDate <= event.date && event.date<= NowDate+6))
          .map(e => this.state.events_temp = this.state.events_temp.concat(e.events))
      })
      
        this.setState({
          event_list_byletter: this.state.events_temp
            .sort(function ascending (a, b) {
            if(a.title < b.title) return -1;
            else if(a.title == b.title) return 0;
            else return 1;
          })
          .map((ev, index) => (
            <Event
              key = {index}
              title = {ev.title}
              date = {ev.date}
              time = {ev.time}
            />
          ))
      })

  })}
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
              key = {index}
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
    return ( // 아예 Calendar에서 날짜와 이벤트를 받아오는 게 나을 수도...?
      <Ref innerRef = {this.contextRef}>
      <div>
      <HeaderPart menu="Calendar" contextRef = {this.contextRef}/>
      <div style={{'marginTop' : 20, marginRight : 0, marginLeft : 0}}>
        <h1 style = {{textAlign:'center'}}></h1>
        <Calendar month={this.state.currentMonth} days={this.props.month_calendar} changeMonth={this.changeMonth} firstDay={firstDay} /> <br />
        <div style = {{width : 1100, marginLeft : 'auto', marginRight : 'auto'}}>
          <div class="dropdown">
            <button class = "dropbtn">
              {this.state.isClicked} <i class="fa fa-angle-down" />
            </button>
            <div class="dropdown-content">
              <button onClick={() => this.setState({isClicked: 'byletter'})}>가나다순</button>
              <button onClick={() => this.setState({isClicked: 'byday'})}>임박순</button>
              <button onClick={() => this.setState({isClicked: 'byposting'})}>등록순</button>
              <button onClick={() => this.setState({isClicked: 'bypopular'})}>인기순</button> 
            </div>
            {this.state.isClicked === 'byposting' ? this.state.event_list :
              (this.state.isClicked === 'byletter' ? this.state.event_list_byletter :
                null )}
            {console.log(this.state.isClicked)}
          </div>
        </div>
      </div>

      </div>
      </Ref>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
