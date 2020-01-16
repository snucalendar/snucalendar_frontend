import React from 'react';

const Event = (props) => {
  const style1 = {
    backgroundColor: 'white',
    padding: '12px',
    color: 'black',
    fontSize: '12px',
    borderTop: 'solid',
  };
  
  const style2 = {
    backgroundColor: 'white',
    padding: '12px',
    color: 'gray',
    fontSize: '10px',
    borderBottom: 'solid',
  };


  return (
    <div>
      <div style={style1}> {props.title} </div>
      <div style={style2}> {props.date} , {props.time}</div>
    </div>
  );
}

export default Event;