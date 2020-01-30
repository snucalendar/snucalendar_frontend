import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../store/actions/index';

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

export const mapDispatchToProps = (dispatch) => ({
    // getEvent: (id) => dispatch(actionCreators.getEvent(id)),
    participateEvent: (id, type) => dispatch(actionCreators.participateEvent(id, type)),
});

export const mapStateToProps = (state) => ({
    event: state.cd.event,
});

class EventDetail extends Component {
    state = {
        event: this.props.event,
    }

    participate = (e) => {
        this.props.participateEvent(this.state.event.id, { type: e.target.value })
            .then((res) => {
                console.log(res); // 이벤트의 좋아요랑 참여 여부를 가져오면 좋을 듯 여기서든 getEvent에서든! 이미 좋아요했으면 버튼에 표시하기
                // this.setState({
                //     event: this.props.event,
                // });
            });
    }

    render() {
        return (
            <div id="background" style={backgroundStyle} onClick={this.props.removeEventDetail}>
                <div style={modalStyle}>
                    {this.props.event.title}
                    <button onClick={this.participate} value="interested">좋아하기</button>
                    <button onClick={this.participate} value="participate">참여하기</button>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
