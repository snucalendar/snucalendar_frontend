import React, { Component } from "react";
import EventDetailModal from './EventDetailModal';

class CalendarEventListModal extends Component {
    state = {
        activeEvent: null,
    }

    handleClick = (e) => {
        this.setState({ activeEvent: e })
    }

    render() {
        const events = this.props.events.map((event, i) => <div onClick={this.handleClick}>{event.title}</div>);
        return (
            <div>
                {events}
                <EventDetailModal event={} />
            </div>
        );
    }
}

export default CalendarEventListModal;
