import React, { Component } from 'react';
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