import React from 'react';

const Post = (props) => {
  return (
    <div>
      <tr>
        <td> type : {props.type} </td>
      title : {props.title} <br />
      preview : {props.preview} <br />
      author : {props.author}

      </tr>
      
    </div>
  );
}

export default Post;
