import React, { Component } from "react";

import EventDetail from '../EventDetail/EventDetail';
import EventBlock from '../EventBlock/EventBlock'

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import './DayEventList.css'


export const mapDispatchToProps = (dispatch) => ({
    getEvent: (id) => dispatch(actionCreators.getEvent(id)),
    participateEvent: (id, type) => dispatch(actionCreators.participateEvent(id, type)),
});

class DayEventList extends Component {
    state = {
        clicked: false,
        id : null,
        events : [],
        modal : null,
    }

    componentDidMount(){
        this.eventBlock()
    }

    toggleEventDetail = (id) => {
        this.props.getEvent(id).then((res) => {
            this.setState({clicked : true, id : id})
        })
    }

    day = () => {
        const day = new Date(this.props.year, this.props.month-1, this.props.date).getDay();
        switch(day){
            case 0:
                return '일'
            case 1:
                return '월'
            case 2:
                return '화'
            case 3:
                return '수'
            case 4:
                return '목'
            case 5:
                return '금'
            case 6:
                return '토'
            default:
                return ''
        }
    }

    eventBlock = () => {
        let events = this.props.events.map((event) => (
                <EventBlock year = {this.props.year} month = {this.props.month} date = {this.props.date} event = {event} toggleEventDetail = {this.toggleEventDetail} day = {this.day()} />
            )
        )

        this.setState({events : events})
    }

    render() {
        const day = this.day()
        return (
            <div id="event_modal_background" onClick={this.props.toggleDayEventList}>
                {this.state.clicked
                ? (<EventDetail id={this.state.id} />)
                : (<div id='event_modal'>
                        <h2 id='event_date'>
                            {this.props.year}년 {this.props.month}월 {this.props.date}일 {day}요일
                        </h2>
                        {this.state.events}
                    </div>
                )}
                
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(DayEventList);
