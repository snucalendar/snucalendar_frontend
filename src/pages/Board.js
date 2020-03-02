import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post';
import AddPost from '../components/addPost';
import { Tab, Header, Icon, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Board.css';
import HeaderPart from '../components/Header';

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
    
  }

  componentDidMount() {
   this.props.getPostPost(1, 10)
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
   this.props.getPostDue(1, 10)
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
    return (
      <div>
        <HeaderPart menu = "Board"/>
        <div className="Board" >
          <Header as='h2' attached='top'>
            <Icon name='clipboard list' />
            <Header.Content>
              홍보게시판
              <AddPost/>
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