import React from 'react';
import Calendar from '../components/Calendar';
import Event from '../components/Event';

const MyCalendar = () => {
  return (
    <div>
      <h1>MyCalendar</h1>
      <Calendar />
      <Event />
    </div>
  );
}

export default MyCalendar;
