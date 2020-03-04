import React from 'react';
import './EventBlock.css'

const EventBlock = (props) => {

    const hour_24 = new Date(props.event.date+'T'+props.event.time).getHours();
    const AMPM = (0 <= hour_24 && hour_24 <= 11) ? '오전' : '오후';
    let hour_12 = hour_24 > 11 ? hour_24-12 : hour_24;
    hour_12 = hour_12 === 0 ? 12 : hour_12;
    const color = props.event.event_type == 'club' ? '#CEF6E3' : '#FFCD12'
    return(
        <div className="EventBlock" key={props.event.id} id={props.event.id} onClick={() => props.toggleEventDetail(props.event.id)}>
            <div className = "Ball" style = {{backgroundColor : color}}>
            </div>
            <h3 id='event_block_title'>{props.event.title}</h3>
            <p id='event_block_date'>{props.year}년 {props.month}월 {props.date}일 {props.day}요일 {AMPM}{hour_12}시 </p>
        </div>
    )
}

export default EventBlock
