import React from 'react';

const Event = (props) => {
  return (
    <div>
      {props.title} <br />
      {props.date} , {props.time}
    </div>
  );
}

export default Event;
