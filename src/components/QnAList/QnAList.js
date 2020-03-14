import React, {Component} from 'react'
import * as actionCreators from '../../store/actions/index';
import { connect } from 'react-redux'
import './QnAList.css'
import QnA from './QnA/QnA'

const mapStateToProps = (state) => ({
    completed : state.qal.qna_list.completed,
    uncompleted : state.qal.qna_list.uncompleted,
})

const mapDispatchToProps = (dispatch) => ({
    getQnAs : (id) => dispatch(actionCreators.getQnAList(id))
}) 

class QnAList extends Component{
    
    state = {
        completed : [],
        uncompleted : []
    }

    componentDidMount(){
        this.setState({
            completed : this.props.completed.map((qna) => (<QnA qna={qna}/>)),
            uncompleted : this.props.uncompleted.map((qna) => (<QnA qna={qna}/>))
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps != this.props){
            this.setState({
                completed : this.props.completed.map((qna) => (<QnA qna={qna}/>)),
                uncompleted : this.props.uncompleted.map((qna) => (<QnA qna={qna}/>))
            })
        }
    }


    render(){
        return (
            <div>
                {this.state.completed}
                {this.state.uncompleted}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QnAList)
