import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import './EventDetail.css'

export const mapDispatchToProps = (dispatch) => ({
    getEvent: (id) => dispatch(actionCreators.getEvent(id)),
    participateEvent: (id, type) => dispatch(actionCreators.participateEvent(id, type)),
});

const mapStateToProps = (state) => ({
    info : state.us.info,
    event : state.ev.event
})

class EventDetail extends Component {
    state = {
        interested : '관심있음',
        participate : '참여하기',
    }

    participate = (e) => {
        this.props.participateEvent(this.state.event.id, { type: e.target.value })
    }

    interested = () => {

    }

    checkMark = () => {
        const interest_filter = this.props.event.interest.filter((id) => (id == this.props.info.id))
        const participate_filter = this.props.event.participate.filter((id) => (id == this.props.info.id))
        const interested = interest_filter.length == 1 ? '관심있음 ✔' : '관심있음'
        const participate = participate_filter.length == 1 ? '참여하기 ✔' : '참여하기'
        this.setState({interested : interested, participate : participate})
    }

    componentDidMount(){
        this.checkMark()
    }
    componentDidUpdate(prevProps){
        if(this.props != prevProps){
            this.checkMark()
        }
    }

    render() {
        console.log(this.props.event)
        return (
                <div id = 'event_detail' onScroll = {e => e.stopPropagation()}>
                    <div className = "Xmark" onClick = {this.props.closeEventDetail}>
                        <div className = "cross1">
                            <div className = "cross2"></div>
                        </div>
                    </div>
                    <div className = 'DetailBody'>
                        <h3 id = "title">{this.props.event.title}</h3>
                        <h3 id = "author">{this.props.info.username}
                            <span style = {{float : "right", fontSize : '2vw'}}>{this.props.event.date} {this.props.event.time}</span>
                        </h3>
                        <div className = "MainContent">
                            <div className = 'Poster'>
                            </div>
                            <div className = 'Content'>
                                <p>{this.props.event.content}</p>
                            </div>
                        </div>
                        <div className = "ParticipantList">
                            <p className = 'ParticipantCount'><span className = "ParticipantCount" style = {{fontWeight : 700}}>총 {this.props.event.participate.length}명</span> 참여 예정</p>
                            <div className = "ParticipantIcons"></div>
                            <p className = 'FriendCount'><span className = "FriendCount" style = {{fontWeight : 700}}>총 {this.props.event.participate.length}명</span> 참여 예정</p>
                        </div>
                        <div className = "CommunityTab">

                        </div>
                        <div id = 'button_group'>
                            <div id = 'left_column' className = 'button_column' onClick = {this.interested}><h3 className = "buttons" >{this.state.interested}</h3></div>
                            <div id = 'right_column' className = 'button_column' onClick = {this.participate}><h3 className = "buttons">{this.state.participate}</h3></div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
