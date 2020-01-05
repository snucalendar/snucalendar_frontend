import React from 'react';

const Day = (props) => {
  const events = props.events.map((e, i) => <li key={i}>{e.title}</li>);

  return (
    <div>
      {props.date}일
      <ul>{events}</ul>
    </div>
  );
}

export default Day;
