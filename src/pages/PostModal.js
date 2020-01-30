import React, { Component } from 'react';
import { post } from 'axios';
import { Input, Form } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

export class PostModal extends Component {
  render(){
    return(
      <div>
        id : {this.props.id}
      </div>
    )
  }
}

export default PostModal;