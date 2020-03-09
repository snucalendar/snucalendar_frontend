import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyCalendar from '../components/MyCalendar/MyCalendar';
import { Tab, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  checklogIn: () => dispatch(actionCreators.checklogIn()),
  getMyCalendarMonth: (year, month) => dispatch(actionCreators.getMyCalendarMonth(year, month)),
  keepPage: (pageName) => dispatch(actionCreators.keepPage(pageName)),
});

export const mapStateToProps = (state) => ({
  my_month_calendar: state.cd.my_month_calendar,
  email: state.us.email,
});

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth() + 1;

export class Main extends Component {
  state = {
    my_month_calendar: [],
    currentYear,
    currentMonth
  };

  componentDidMount() {
    this.props.checklogIn()
      .then(() =>
        this.props.getMyCalendarMonth(this.state.currentYear, this.state.currentMonth)
          .then(() => {
            this.setState({
              my_month_calendar: this.props.my_month_calendar
            });
          }))
      .catch(() => this.props.history.push('/login/'))};  

  panes = [
    {
      menuItem: '다가오는',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.props.date
                          .filter(e => e.date >= 2).interested_events}
                      </List>
                    </Tab.Pane>,
    },
    {
      menuItem: '이미참여',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.state.my_event_list_gone}
                      </List>
                    </Tab.Pane>,
    },
  ]

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
    this.props.checklogIn()
    .then(() =>
    this.props.getMyCalendarMonth(newYear, newMonth)
      .then(() => {
        this.setState({
          currentYear: newYear,
          currentMonth: newMonth,
          my_month_calendar: this.props.my_month_calendar
        });
      })
    )
    .catch(() => { this.props.history.push('/login/'); })
  }

  render() {
    const firstDay = new Date(this.state.currentYear, this.state.currentMonth-1, 1).getDay();
    this.props.keepPage('MyCalendar');
    return (
      <div>
        
          <div style={{'marginTop' : 20, marginRight : 'auto', marginLeft : 'auto'}}>
          <h1 style = {{textAlign:'center'}}></h1>
            <MyCalendar month={this.state.currentMonth} days={this.props.my_month_calendar} changeMonth={this.changeMonth} firstDay={firstDay} />
          </div>
      </div>
    );
  }
}
//<Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
export default connect(mapStateToProps, mapDispatchToProps)(Main);
