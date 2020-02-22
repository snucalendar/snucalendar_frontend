import React from 'react';
import Day from './Day';

const Calendar = (props) => {
  const days = props.days.map((day, index) => (
    <Day
      key={index}
      date={day.date}
      events={day.events}
      isFirst={ index === 0 ? true : false }
      firstDay={props.firstDay}
    />
  ));

  return ( // 달의 첫 날이 시작하는 요일을 알아야 할 듯...? 그것만 fr을 다르게 주게
    <div style={{ border: '1px solid grey', width: '1050px'}}>
      <br />
      <div style={{textAlign: 'center'}}>
        <span style={{'font-size': '2em'}} data-increment='minus' onClick={props.changeMonth}>◀</span>
        <span style={{'font-size': '2em'}}>{props.month}월</span>
        <span style={{'font-size': '2em'}} data-increment='plus' onClick={props.changeMonth}>▶</span>
      </div>
      <br /><br />
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
        <div style={{'font-size': '2em', textAlign: 'center'}}>일</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>월</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>화</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>수</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>목</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>금</div>
        <div style={{'font-size': '2em', textAlign: 'center'}}>토</div>
      </div>
      <p style={{marginBottom:'20px'}}/>
      <div style={{display: 'grid', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
        {days}
      </div>
    </div>
  );
}

export default Calendar;
