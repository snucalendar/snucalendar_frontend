import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Post/Post';
import AddPost from '../components/addPost/addPost';
import { Tab, Header, Icon, List, Ref } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './Board.css';

import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  getPostDue: (start, interval) => dispatch(actionCreators.getPostDue(start, interval)),
  getPostPost: (start, interval) => dispatch(actionCreators.getPostPost(start, interval)),
  keepPage: (pageName) => dispatch(actionCreators.keepPage(pageName)),
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

  contextRef = createRef()

  getPosting = () => {
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
           date = {ps.event_date}
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
          date = {ps.event_date}
          image = {ps.image}
         />
       )),
     });
   })
  }

  componentDidMount() {
   this.getPosting()
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
    this.props.keepPage('Board');
    return (
      <Ref innerRef = {this.contextRef}>
        <div>
          <div className="Board" style = {{marginLeft : 'auto', marginRight : 'auto'}}>
            <Header as='h2' attached='top'>
              <Icon name='clipboard list' />
              <Header.Content>
                홍보게시판
                <AddPost getPosting = {this.getPosting}/>
                <Header.Subheader>행사 홍보글을 올릴 수 있어요!</Header.Subheader>
              </Header.Content>
            </Header>
            <Tab menu={{ secondary: true, pointing: true }} panes={this.panes} />
            <br />
          </div>
        </div>
      </Ref>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);