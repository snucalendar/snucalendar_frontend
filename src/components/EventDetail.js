import React, { Component } from "react";

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
};

class EventDetail extends Component {
    render() {
        return (
            <div id="background" style={backgroundStyle} onClick={this.props.removeEventDetail}>
                <div style={modalStyle}>
                    {this.props.event.title}
                    <br />
                    dfddsfdsafsda
                </div>
            </div>
        );
    }
}

export default EventDetail;