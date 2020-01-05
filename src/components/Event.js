import React from 'react';

const Event = (props) => {
  return (
    <div>
      title : {props.title} <br />
      {props.year}년 {props.month}월 {props.date}일 {props.time}
    </div>
  );
}

export default Event;
