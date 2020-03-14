import React, { Component } from "react";
import { connect } from 'react-redux';

import * as actionCreators from '../../store/actions/index';
import './EventDetail.css'
import CommentList from '../../components/CommentList/CommentList'
import QnAList from '../../components/QnAList/QnAList'

import EventSummaryBar from '../../components/EventSummaryBar/EventSummaryBar'

export const mapDispatchToProps = (dispatch) => ({
    getEvent: (id) => dispatch(actionCreators.getEvent(id)),
    getQnAs : (id) => dispatch(actionCreators.getQnAList(id)),
    getComments : (id) => dispatch(actionCreators.getCommentList(id))
});

const mapStateToProps = (state) => ({
    info : state.us.info,
    event : state.ev.event
})

class EventDetail extends Component {

    state = {
        communityTab : 'comment'
    }

    changeCommunityTabCSS = (e) => {
        var tabs = document.getElementsByClassName("TabLink");
        for(var i=0;i < tabs.length ;i++){
            tabs[i].style.color = '#81848e';
            tabs[i].style.backgroundColor = '#f0f1f3';
        }
        
        e.target.style.color = '#f0f1f3';
        e.target.style.backgroundColor = '#81848e'
        this.forceUpdate()
        
    }

    componentDidMount(){
        this.props.getComments(this.props.event.id)
        this.props.getQnAs(this.props.event.id)
    }

    render() {
        return (
                <div id = 'event_detail'>
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
                            <div className = "CommunityTabButton">
                                <button onClick = {(e) => {this.changeCommunityTabCSS(e); this.setState({communityTab : 'comment'})}} className = "TabLink" id = "commentButton">덧글</button>
                                <button onClick = {(e) => {this.changeCommunityTabCSS(e); this.setState({communityTab : 'qna'})}} className = "TabLink" id = "QnAButton">Q&A</button>
                            </div>
                            <div className = "CommentORQnA">
                                { this.state.communityTab == 'comment' ? (<CommentList id = {this.props.event.id}/>) : (<QnAList id = {this.props.event.id}/>)}
                            </div>
                        </div>
                    </div>
                    <div className = "Footer">
                        <EventSummaryBar type event = {this.props.event}/>
                    </div>
                </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetail);
