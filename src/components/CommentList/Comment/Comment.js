import React from 'react'
import './Comment.css'

const Comment = (props) => {
    
    const now = new Date()
    const upload_date = new Date(props.comment.upload_date)
    const time = now - upload_date
    let daysPassed = ''
    if(time>=(1000 * 60 * 60 * 24)){
        daysPassed = Math.floor(time/(1000 * 60 * 60 * 24) )+'일 전'
    }
    else if(time >= (1000 * 60 * 60)){
        daysPassed = Math.floor(time/(1000 * 60 * 60)) +'시간 전'
    }
    else if(time >= (1000 * 60)){
        daysPassed = Math.floor(time/(1000 * 60)) +'분 전'
    }
    else{
        daysPassed = "방금 전"
    }
    return(
        <div className = "CommentBlock">
            <div className = "PartraitColumn">
                <div className = "Portrait"></div>
            </div>
            <div className = "CommentColumn">
            <div className = "AuthorName">{props.comment.author}</div>
            <p className = "CommentBody">{props.comment.comment}</p>
            <h5 className = "DaysPassed">{daysPassed}</h5>
            <h5 className = "AnswerComment">답글 달기</h5>
            </div>
        </div>
    )
}

export default Comment;