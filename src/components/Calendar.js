import React, { Component } from 'react';
import Day from './Day';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getCalendarMonth: (year, month) => dispatch(actionCreators.getCalendarMonth(year, month)),
  changeMonth: (increment) => dispatch(actionCreators.changeMonth(increment)),
});

export const mapStateToProps = (state) => ({
  month_calendar: state.main.month_calendar,
  currentYear: state.main.currentYear,
  currentMonth: state.main.currentMonth,
});

class Calendar extends Component {
  handleClick = (e) => {
    const increment = e.target.dataset.increment === 'plus' ? 1 : -1;
    this.props.changeMonth(increment).then(() => {
      this.props.getCalendarMonth(this.props.currentYear, this.props.currentMonth).then(() => {
        console.log('DONE?!');
      });
    });
  }

  render() {
    console.log(this.props)
    const days = this.props.days.map((day, index) => (
      <Day
        key={index}
        date={day.date}
        events={day.events}
        isFirst={ index === 0 ? true : false }
        firstDay={this.props.firstDay}
      />
    ));

    return ( // 달의 첫 날이 시작하는 요일을 알아야 할 듯...? 그것만 fr을 다르게 주게
      <div>
        <div style={{textAlign: 'center'}}>
          <span data-increment='minus' onClick={this.handleClick}>◀</span>
          <span>{this.props.month}월</span>
          <span data-increment='plus' onClick={this.handleClick}>▶</span>
        </div>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
          <div>일</div>
          <div>월</div>
          <div>화</div>
          <div>수</div>
          <div>목</div>
          <div>금</div>
          <div>토</div>
        </div>
        <div style={{display: 'grid', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
          {days}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
