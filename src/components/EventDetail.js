import React, { Component } from "react";

const modalStyle = {
    width: 300,
    height: 400,
    backgroundColor: 'white',
};

class EventDetail extends Component {
    render() {
        return (
            <div style={modalStyle}>
                {this.props.event.title}
                <br />
                dfddsfdsafsda
            </div>
        );
    }
}

export default EventDetail;
