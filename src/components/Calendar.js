import React from 'react';
import Event from './Event';

const Calendar = (props) => {
  const calendar_event = props.events.map((ev, index) => (
      <Event
        key = {index}
        title = {ev.title}
      />
    ))

  return (
    <div>
      year: {props.year},
      month: {props.month},
      date: {props.date}
      {calendar_event}
    </div>
  );
}

export default Calendar;
