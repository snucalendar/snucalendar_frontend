import React from 'react';

const Event = (props) => {
  return (
    <div>
      title : {props.title} / content : {props.content}
    </div>
  );
}

export default Event;
