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
    <div>
      <div style={{textAlign: 'center'}}>
        <span data-increment='minus' onClick={props.changeMonth}>◀</span>
        <span>{props.month}월</span>
        <span data-increment='plus' onClick={props.changeMonth}>▶</span>
      </div>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
        <div>일</div>
        <div>월</div>
        <div>화</div>
        <div>수</div>
        <div>목</div>
        <div>금</div>
        <div>토</div>
      </div>
      <div style={{display: 'grid', gridTemplateRows: '1fr 1fr 1fr 1fr 1fr', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr'}}>
        {days}
      </div>
    </div>
  );
}

export default Calendar;
