import React, {Component} from 'react'
import { connect } from 'react-redux'
import './EventSummaryBar.css'
import * as actionCreators from '../../store/actions/index';

const mapDispatchToProps = (dispatch) => ({
    participateEvent: (id) => dispatch(actionCreators.participateEvent(id)),
    interestEvent: (id) => dispatch(actionCreators.interestEvent(id)),
    cancelPreference : (id) => dispatch(actionCreators.cancelPreference(id)),
    getUserInfo: () => dispatch(actionCreators.getUserInfo())
})

const mapStateToProps = (state) => ({
    info : state.us.info,
})

class EventSummaryBar extends Component {

    state = {
        interest : "관심\n등록",
        participate : "참여\n등록",
    }

    componentDidMount(){
        this.checkInfo()
    }
    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            this.checkInfo()
        }
    }

    checkInfo = () => {
        if(this.props.info.interest.filter((id) => id===this.props.info.id).length == 1){
            this.setState({interest : "관심\n있음"})
        }
        else {
            this.setState({interest : "관심\n등록"})
        }
        if(this.props.info.participate.filter((id) => id===this.props.info.id).length == 1){
            this.setState({participate : "참여\n예정"})
        }
        else {
            this.setState({participate : "참여\n등록"})
        }
    }
    interest = () => {
        if(this.props.interest == "관심\n있음"){
            this.props.cancelPreference(this.props.event.id).then(() => {
                this.props.getUserInfo()
            })
        }
        else{
            this.props.interestEvent(this.props.event.id).then(() => {
                this.props.getUserInfo()
            })
        }
    }
    participate = () => {
        if(this.props.interest == "참여\n예정"){
            this.props.cancelPreference(this.props.event.id).then(() => {
                this.props.getUserInfo()
            })
        }
        else{
            this.props.participateEvent(this.props.event.id).then(() => {
                this.props.getUserInfo()
            })
        }
    }
    render(){
        return(
            <div className = "EventSummaryBar">
                <div className = "Like">
                    <div className = "LikeIcon">좋아요</div>
                    <p style = {{lineHeight : '10vw'}}>{this.props.type ? this.props.event.like.length : this.props.event.like_count}</p>
                </div>
                <div className = "Comment">
                    <div className = "CommentIcon">덧글</div>
                    <p style = {{lineHeight : '10vw'}}>{this.props.type ? this.props.event.comment.length : this.props.event.comment_count }</p>
                </div>
                <div className = "QnA">
                    <div className = "QnAIcon">Q&A</div>
                    <p style = {{lineHeight : '10vw'}}>{this.props.type ?  this.props.event.qna.length : this.props.event.qna_count}</p>
                </div>
                <div className = "InterestIcon" onClick = {(e) => {e.stopPropagation(); this.interest()}}>{this.state.interest}</div>
                <div className = "ParticipateIcon" onClick = {(e) => {e.stopPropagation();this.participate()}}>{this.state.participate}</div>
            </div>
        )
    }


}


export default connect(mapStateToProps, mapDispatchToProps)(EventSummaryBar)