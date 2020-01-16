import React from 'react';
import { List, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import image01 from '../images/iu.jpg'

const Post = (props) => {
  return (
      <List.Item>
        <Image avatar src={image01} />
        <List.Content>
          <List.Header as='a'>{props.title}</List.Header>
          <List.Description as='a'>{props.content}</List.Description>
        </List.Content>
      </List.Item>
  );
}

export default Post;
