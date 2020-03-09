import React from 'react';
import './Event.css';

const Event = (props) => {

  const style1 = {
    marginLeft: '30px',
    height: '80px',
    backgroundColor: 'white',
    padding: '12px',
    color: 'black',
    fontSize: '18px',
    borderBottom : '0.2px solid #DBDBDB'
  };

  return (
    <div style = {{width : '1050px'}}>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
      <div style={style1}> 
        <p className="title">
          {props.title}
        </p>
        <p style = {{marginTop: '-10px', color: '#B4B4B4'}}>
          {props.date},
          {props.time}
        </p>
      </div>
    </div>
  );
}

export default Event;
