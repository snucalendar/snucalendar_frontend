import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import AddPost from '../components/addPost';
import { Button, Tab, Header, Modal, Icon, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Board.css';
import PostModal from './PostModal';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getPostDue: (start, interval) => dispatch(actionCreators.getPostDue(start, interval)),
  getPostPost: (start, interval) => dispatch(actionCreators.getPostPost(start, interval)),
  getEvent: (id) => dispatch(actionCreators.getEvent(id)),
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
  
  componentDidMount() {
   this.props.getPostPost(1, 1)
   .then(() => {
     var post_list_post = JSON.parse(this.props.post_list_post)
     this.setState({
       postList_post: post_list_post
       .map((ps, index) =>  (
         <Post
           key = {index}
           id = {ps.id}
           title = {ps.title}
           content = {ps.content}
           date = {this.props.getEvent(ps.event).event_date}
           image = {ps.image}
         />
       )),
     }); 
   })
   this.props.getPostDue(1, 1)
   .then(() => {
     var post_list_due = JSON.parse(this.props.post_list_due)
     this.setState({
       postList_due: post_list_due
       .map((ps, index) =>  (
         <Post
          key = {index}
          id = {ps.id}
          title = {ps.title}
          content = {ps.content}
          date = {this.props.getEvent(ps.event).event_date}
          image = {ps.image}
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
    const { open, closeOnDimmerClick } = this.state;
    return (
      <div>
        <Modal
          open={open}
          closeOnDimmerClick={closeOnDimmerClick}
          onClose={this.close}
          style = {{left : 'auto', top : 'auto'}}
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
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);