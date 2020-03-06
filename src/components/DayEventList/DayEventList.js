import React, { Component } from "react";
import EventDetail from '../EventDetail/EventDetail';
import EventBlock from '../EventBlock/EventBlock'
import './DayEventList.css'


class DayEventList extends Component {
    state = {
        clickedEvent: null,
        events : [],
        modal : null,
    }

    componentDidMount(){
        this.eventBlock()
    }

    toggleEventDetail = (id) => {
        this.setState({ clickedEvent: this.props.events.find((event) => event.id == id) });
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
                {this.state.clickedEvent 
                ? (<EventDetail event={this.state.clickedEvent} />)
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

export default DayEventList;
