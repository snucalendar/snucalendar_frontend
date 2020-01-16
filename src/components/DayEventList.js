import React, { Component } from "react";
import EventDetail from './EventDetail';

const backgroundStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
};

const modalStyle = {
    width: 300,
    height: 400,
    backgroundColor: 'white',
}

class DayEventList extends Component {
    state = {
        clickedEvent: null,
    }

    toggleEventDetail = (e) => {
        e.stopPropagation();
        if (e.target.id === 'background') {
            this.setState({ clickedEvent: null });
        } else if (e.target.dataset.eid) {
            e.target.parentNode.style.display = 'none';
            this.setState({ clickedEvent: this.props.events.find((event) => event.id === Number(e.target.dataset.eid)) });
        }
    }

    render() {
        const events = this.props.events.map((event) => <div key={event.id} data-eid={event.id} onClick={this.toggleEventDetail}>{event.title}</div>);
        const modal = this.state.clickedEvent ? <EventDetail event={this.state.clickedEvent} toggleEventDetail={this.toggleEventDetail} /> : null;
        return (
            <div id="background" style={backgroundStyle} onClick={this.props.toggleDayEventList}>
                <div style={modalStyle} onClick={this.toggleEventDetail}>
                    {events}
                </div>
                {modal}
            </div>
        );
    }
}

export default DayEventList;
