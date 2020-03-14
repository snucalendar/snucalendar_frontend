import React from 'react';
import './EventBlock.css'
import EventSummaryBar from '../../components/EventSummaryBar/EventSummaryBar' 

const EventBlock = (props) => {
    let now = new Date();
    now.setHours(0)
    now.setMinutes(0)
    now.setSeconds(0)
    now.setMilliseconds(0)
    let date = new Date(props.event.date+'T'+props.event.time)
    const hour_24 = date.getHours();
    const AMPM = (0 <= hour_24 && hour_24 <= 11) ? '오전' : '오후';
    let hour_12 = hour_24 > 11 ? hour_24-12 : hour_24;
    hour_12 = hour_12 === 0 ? 12 : hour_12;
    const color = props.event.event_type == 'club' ? '#CEF6E3' : '#FFCD12'
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
    date.setMilliseconds(0)
    let distance = (date - now) / (1000 * 60 * 60 * 24);
    let dDay = '';
    if(distance<0){
      dDay = 'D+'+ (-distance)
    }
    else if(distance>0){
      dDay = 'D-' + distance
    }
    else{
      dDay = 'D-day'
    }

    return(
        <div className="EventBlock" key={props.event.id} id={props.event.id} onClick={() => props.openEventDetail(props.event.id)}>
            <div className = "Ball" style = {{backgroundColor : color}}>
            </div>
            <h3 id='event_block_title'>{props.event.title}</h3>
            <h2 className = "dDay">{dDay}</h2>
            <p id='event_block_date'>{props.year}년 {props.month}월 {props.date}일 {props.day}요일 {AMPM}{hour_12}시 </p>
            <div>
                <EventSummaryBar event = {props.event} />
            </div>
        </div>
    )
}

export default EventBlock
