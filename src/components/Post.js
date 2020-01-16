import React from 'react';
import { List, Image, Grid } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import image01 from '../images/iu.jpg'
import '../pages/Board.css';

const Post = (props) => {
  var now = new Date();
  var date = new Date(props.event_date);
  var distance = date - now;
  var d = Math.floor(distance / (1000 * 60 * 60 * 24));
  return (
      <List.Item>
        <Grid columns='three'>
          <Grid.Row height={1}>
            <Grid.Column width={3} >
              <Image src={image01}/>
            </Grid.Column>
            <Grid.Column width={9}>
              <List.Content>
                <List.Header as='a'><h3>{props.title}</h3></List.Header>
                <List.Description as='a'>{props.content}</List.Description><br />
              </List.Content>
            </Grid.Column>
            <Grid.Column width={2} verticalAlign='middle'>
              <h2 className="d-day">D-{d}</h2>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </List.Item>
  );
}

export default Post;
