import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import AddPost from '../components/AddPost';
import { Button, Tab, Header, Modal, Icon, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Board.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getPostDue: (start, interval) => dispatch(actionCreators.getPostDue(start, interval)),
  getPostPost: (start, interval) => dispatch(actionCreators.getPostPost(start, interval))
});

export const mapStateToProps = (state) => ({
  post_list_post: state.psl.post_list_post,
  post_list_due: state.psl.post_list_due,
})

export class Board extends Component {
  state = {
    postList_post : [],
    postList_due: [],
    open: false,
  }
  

  closeConfigShow = (closeOnDimmerClick) => () => {
    this.setState({ closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  array_1 = [
    {id : 0, "title": '1등 게시글', "content" : 'test_content_1', "event_date": "2020/01/31"},
    {id : 1, "title": '2등 게시글', "content" : 'test_content_2', "event_date": "2020/01/26"},
  ]

  array_2 = [
    {id : 0, "title": '1등 임박', "content" : 'test_content_1', "event_date": "2020/01/26"},
    {id : 1,"title": '2등 임박', "content" : 'test_content_2', "event_date": "2020/01/31"},
  ]
  
  componentDidMount() {
    this.props.getPostPost(1, 2)
      .then(() => {
        this.setState({
          postList_post: this.array_1
          .map((ps, index) =>  (
            <Post
              key = {index}
              title = {ps.title}
              content = {ps.content}
              event_date = {ps.event_date}
            />
          )),
        }); 
      })
      this.props.getPostDue(1, 2)
      .then(() => {
        this.setState({
          postList_due: this.array_2
          .map((ps, index) =>  (
            <Post
              key = {index}
              title = {ps.title}
              content = {ps.content}
              event_date = {ps.event_date}
            />
          )),
        });
      })

  }

  panes = [
    {
      menuItem: '게시순',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.state.postList_post}
                      </List>
                    </Tab.Pane>,
    },
    {
      menuItem: '기한순',
      render: () => <Tab.Pane attached={false}>
                      <List divided relaxed>
                        {this.state.postList_due}
                      </List>
                    </Tab.Pane>,
    },
  ]

  render(){
    const { open, closeOnDimmerClick } = this.state
    return (
      <div className="Board" >
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
        <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
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