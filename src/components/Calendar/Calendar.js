import React from 'react';
import Day from '../Day/Day';
import './Calendar.css';


const Calendar = (props) => {
  const days = props.days.map((day, index) => (
    <Day
      key={index}
      year={day.year}
      month={day.month}
      date={day.date}
      events={day.events}
      isFirst={ index === 0 ? true : false }
      firstDay={props.firstDay}
    />
  ));

  return (
    <div style = {{width: '100%'}}>
      <div style={{ paddingTop : '1rem', paddingBottom : '0.5rem', textAlign: 'center', backgroundColor: '#f7f7f8'}}>
        <link rel="stylesheet" href="Calendar.css" type="Calendar/css" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
        <span><i class="fa fa-angle-left" style={{'font-weight' : '900'}} data-increment='minus' onClick={props.changeMonth}></i></span>
        <span style={{marginLeft:'2rem', marginRight : '2rem'}}>{props.year}년 {props.month}월</span>
        <span><i class="fa fa-angle-right" style={{'font-weight' : '900'}} data-increment='plus' onClick={props.changeMonth}></i></span>
      </div>

      <div style={{width: '100%'}}>
        <div style={{'border-bottom': '1px solid #D8D8D8', backgroundColor: '#f7f7f8', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
          <span className = 'days' style = {{color: 'red'}}>일</span>
          <span className = 'days'>월</span>
          <span className = 'days'>화</span>
          <span className = 'days'>수</span>
          <span className = 'days'>목</span>
          <span className = 'days'>금</span>
          <span className = 'days' style = {{color: '#368AFF'}}>토</span>
        </div>
        <p style={{marginBottom:'10px'}}/>
        <div className = "CalendarDays">
          {days}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
