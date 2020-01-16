import React, { Component } from "react";

class EventDetail extends Component {
    render() {
        return (
            <div>{this.props.event.title}</div>
        );
    }
}

export default EventDetail;
