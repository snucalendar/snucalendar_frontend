import React, { Component } from "react";

class EventDetailModal extends Component {
    render() {
        return (
            <div>{this.props.event.title}</div>
        );
    }
}

export default EventDetailModal;
