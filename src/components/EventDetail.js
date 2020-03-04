import React, { Component } from "react";
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react'

import * as actionCreators from '../store/actions/index';
import './EventDetail.css'

export const mapDispatchToProps = (dispatch) => ({
    // getEvent: (id) => dispatch(actionCreators.getEvent(id)),
    participateEvent: (id, type) => dispatch(actionCreators.participateEvent(id, type)),
});

class EventDetail extends Component {
    state = {
        event: this.props.event,
    }

    participate = (e) => {
        this.props.participateEvent(this.state.event.id, { type: e.target.value })
            .then((res) => {
            });
    }

    render() {
        return (
                <div id = 'detail_modal'>
                    <h2 id = "title">{this.props.event.title}</h2>
                    <Icon id = "like_icon" name = "thumbs up" circular/>
                    <h3 id = 'place'>장소</h3>
                    <h3 id = 'time'>시간</h3>
                    <h3 id = 'participants'>참여자</h3>
                    
                    <div id = 'participantsList'>
                        참여자 목록
                    </div>
                    <div id = 'button_group'>
                        <div id = 'left_column' className = 'button_column'><h3 className = "buttons">관심 있음</h3></div>
                        <div id = 'right_column' className = 'button_column'><h3 className = "buttons">참여하기</h3></div>
                    </div>
                </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(EventDetail);
