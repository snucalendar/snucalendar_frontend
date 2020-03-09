import React, { Component } from "react";
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions/index';
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
        return (
                <div id = 'event_detail'>
                    <h2 id = "title">{this.props.event.title}</h2>
                    <div style = {{marginTop : 50, float : 'left', }}>
                        <h4 id = 'place'>장소</h4>
                        <h4 id = 'time'>시간</h4>
                        <h4 id = 'participants'>참여자</h4>
                    </div>
                    <div style = {{marginTop : 50}}>
                        <h4 id = 'participantsList'>참여자 목록</h4>
                    </div>
                    <div id = 'button_group'>
                        <div id = 'left_column' className = 'button_column' onClick = {this.interested}><h3 className = "buttons" >{this.state.interested}</h3></div>
                        <div id = 'right_column' className = 'button_column' onClick = {this.participate}><h3 className = "buttons">{this.state.participate}</h3></div>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
