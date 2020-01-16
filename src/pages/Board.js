import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import AddPost from '../components/addPost';
import { Button, Header, Modal, Icon, Segment, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Board.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getPostDue: (start, interval) => dispatch(actionCreators.getPostDue(start, interval)),
  getPostPost: (start, interval) => dispatch(actionCreators.getPostPost(start, interval))
});

export const mapStateToProps = (state) => ({
  post_list: state.psl.post_list_post,
})

export class Board extends Component {
  state = {
    postList : [],
    open: false,
  }

  closeConfigShow = (closeOnDimmerClick) => () => {
    this.setState({ closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  array = [
    {id : 0, "title": 'post_test_1', "content" : 'test_content_1'},
    {id : 1, "title": 'post_test_2', "content" : 'test_content_2'},
  ]
  
  componentDidMount() {
    this.props.getPostPost(1, 2)
      .then(() => {
        console.log(this.array)
        this.setState({
          postList: this.array
          .map((ps, index) =>  (
            <Post
              key = {index}
              title = {ps.title}
              content = {ps.content}
            />
          )),
        });
      })
  }

  render(){
    const { open, closeOnDimmerClick } = this.state
    return (
      <div className="Board">
        <Header as='h2' attached='top'>
          <Icon name='clipboard list' />
          <Header.Content>
            홍보게시판
            <Button onClick={this.closeConfigShow(true, false)}>
              +
            </Button>
            <Header.Subheader>행사 홍보글을 올릴 수 있어요!</Header.Subheader>

          </Header.Content>
        </Header>
        <Segment attached>
          <List divided relaxed>
            {this.state.postList}
          </List>
        </Segment>
        <br />

        <Modal
          open={open}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
        >
          <Modal.Header>게시글 추가하기</Modal.Header>
          <Modal.Content>
            <AddPost />
          </Modal.Content>
          <Modal.Actions>
            <Button onClick={this.close} negative>
              나가기
            </Button>
            <Button               
              onClick={this.close}
              positive
              labelPosition='right'
              icon='checkmark'
              content='완료!'
            />
          </Modal.Actions>
        </Modal>
      </div>
      
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);