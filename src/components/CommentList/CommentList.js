import React, { Component } from 'react'
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux'
import './CommentList.css'
import Comment from './Comment/Comment'

const mapStateToProps = (state) => ({
    comments : state.cml.comment_list,
    event : state.ev.event
})

const mapDispatchToProps = (dispatch) => ({
    getComments : (id) => dispatch(actionCreators.getCommentList(id))
}) 

class CommentList extends Component {

    state = {
        
    }
    
    render(){
        const comments = this.props.comments.map((comment) => <Comment comment = {comment}/>)
        return (
            <div>
                {comments}
            </div>  
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList)
