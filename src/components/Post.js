import React, { Component } from 'react';
import { Button, Modal, List, Grid, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../pages/Board.css';
import PostModal from '../pages/PostModal';
import * as actionCreators from '../store/actions/index';

export class Post extends Component {
  state = {
    open: false,
  }

  closeConfigShow = (closeOnDimmerClick) => () => {
    this.setState({ closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

  render(){
    console.log(this.props.image)
    const { open, closeOnDimmerClick } = this.state;
    var now = new Date();
    var date = new Date(this.props.date);
    var distance = date - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var image = actionCreators.getImage(this.props.image)
  return (
    <div style = {{borderBottom: '1px solid #D5D5D5', marginBottom: '15px'}}>
    <Modal
    open={open}
    closeOnDimmerClick={closeOnDimmerClick}
    onClose={this.close}
    style = {{left : 'auto', top : 'auto'}}
  >
  <Modal.Header>상세보기</Modal.Header>
  <Modal.Content>
    <PostModal id={this.props.id} />
  </Modal.Content>
  <Modal.Actions>
    <Button onClick={this.close} negative>
      나가기
    </Button>
  </Modal.Actions>
  </Modal>
  
      <List.Item onClick={this.closeConfigShow(true, false)}>
        <Grid columns='three'>
          <Grid.Row height={1}>
            <Grid.Column width={3} >
              <Image src={`http://13.59.128.56:8000/media/${this.props.image}`} />
            </Grid.Column>
            <Grid.Column width={9}>
              <List.Content style={{marginTop:'5px'}}>
                <List.Header as='a'><h3>{this.props.title}</h3></List.Header>
                <List.Description as='a'>{this.props.content}</List.Description><br />
              </List.Content>
            </Grid.Column>
            <Grid.Column width={2} verticalAlign='middle'>
              <h2 className="d-day">D-{d}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </List.Item>
      </div>
  )
  }
}


export default Post;
