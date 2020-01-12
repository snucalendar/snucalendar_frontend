import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';

import * as actionCreators from '../store/actions/index';

/*
export const mapDispatchToProps = (dispatch) => ({
  getPostList: () => dispatch(actionCreators.getPostList()),
});

export const mapStateToProps = (state) => ({
  post_list: state.psl.post_list,
})
*/

export class Board extends Component {
  state = {
    post_list : [],
  }

  render(){
    return (
      <div>
        <h1>Board</h1>
        <Post />
      </div>
    );
  }
}

export default Board;
//export default connect(mapStateToProps, mapDispatchToProps)(Board);