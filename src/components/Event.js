import React from 'react';

const Event = (props) => {
  var now = new Date();
  var date = new Date(props.event_date);
  var distance = date - now;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  return (
    <div>
      title : {props.title}
      D-day: {d}
    </div>
  );
}

export default Event;
