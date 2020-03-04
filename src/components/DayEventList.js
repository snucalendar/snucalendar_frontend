import React, { Component } from "react";
import EventDetail from './EventDetail';
import './DayEventList.css'


class DayEventList extends Component {
    state = {
        clickedEvent: null,
        events : [],
        modal : null,
    }

    toggleEventDetail = (e) => {
        console.log(e)
        e.stopPropagation();
        if (e.target.id === 'background') {
            this.setState({ clickedEvent: null });
        } else if (e.target.id) {
            e.target.parentNode.style.display = 'none';
            this.setState({ clickedEvent: this.props.events.find((event) => event.id == e.target.id) });
        }
    }

    render() {
        const events = this.props.events.map((event) => <div key={event.id} id={event.id} onClick={this.toggleEventDetail}>{event.title}</div>);
        const modal = this.state.clickedEvent ? <EventDetail event={this.state.clickedEvent} removeEventDetail={this.props.toggleDayEventList} /> : events;
        return (
            <div id="event_modal_background" onClick={this.props.toggleDayEventList}>
                <div id='event_modal'>
                    {modal}
                </div>
            </div>
        );
    }
}

export default DayEventList;
