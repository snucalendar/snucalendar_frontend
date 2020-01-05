import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getPostDue: () => dispatch(actionCreators.getPostDue()),
  getPostPost: () => dispatch(actionCreators.getPostPost())
});

export const mapStateToProps = (state) => ({
  post_list: state.psl.post_list,
})

export class Board extends Component {
  state = {
    post_list : [],
  }

  componentDidMount() {
    this.props.getPostList()
      .then(() => {
        this.setState({
          post_list: this.props.post_list
          .map((ps, index) => (
            <Post
              key = {index}
              type = {ps.type}
              author = {ps.author}
              title = {ps.title}
              preview = {ps.preview}
            />
          ))
        })
      })
  }

  render(){
    return (
      <div>
        <h1>후기게시판</h1>
        {this.state.post}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);