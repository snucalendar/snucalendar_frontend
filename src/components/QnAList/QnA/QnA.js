import React from 'react'
import './QnA.css'

const QnA = (props) => {
    const question_date = new Date(props.qna.question_upload_date)
    const answer_date = new Date(props.qna.answer_upload_date)
    if(props.qna.completed){
        return(
            <div className = "QnABlock">
                <h4 className = "AnswerComplete">답변완료</h4>
                <div className = "QRow">
                    <div className = "QColumn">
                        <p className = "Q">Q</p>
                    </div>
                    <div className = "QuestionColumn">
                        <div className = "Question">{props.qna.question}</div>
                        <p className = 'QuestionAuthor'>{props.qna.question_author}</p>
                        <p className = 'QuestionUploadDate'>{question_date.getFullYear()}-{question_date.getMonth()}-{question_date.getDate()}</p>
                    </div>
                </div>
                <div className = "RRow">
                    <div className = "AColumn">
                        <p className = "A">A</p>
                    </div>
                    <div className = "AnswerColumn">
                        <div className = "Answer">{props.qna.answer}</div>
                        <p className = 'AnswerAuthor'>{props.qna.answer_author}</p>
                        <p className = 'AnswerUploadDate'>{answer_date.getFullYear()}-{answer_date.getMonth()}-{answer_date.getDate()}</p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <div className = "QnABlock">
                <h4 className = "AnswerNotComplete">미답변</h4>
                <div className = "QColumn">
                    <p className = "Q">Q</p>
                </div>
                <div className = "QuestionColumn">
                    <div className = "Question">{props.qna.question}</div>
                    <p className = 'QuestionAuthor'>{props.qna.question_author}</p>
                    <p className = 'QuestionUploadDate'>{question_date.getFullYear()}-{question_date.getMonth()}-{question_date.getDate()}</p>
                </div>
            </div>
        )
    }
}

export default QnA;