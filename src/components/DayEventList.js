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
        activeEvent: null,
    }

    handleClick = (e) => {
        this.setState({ activeEvent: e })
    }

    render() {
        const events = this.props.events.map((event, i) => <div key={i} onClick={this.handleClick}>{event.title}</div>);
        return (
            <div id="background" style={backgroundStyle} onClick={this.props.toggleDayEventList}>
                <div style={modalStyle}>
                    {events}
                </div>
                <EventDetail event={1} />
            </div>
        );
    }
}

export default DayEventList;
