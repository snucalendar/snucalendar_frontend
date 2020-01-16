import React from 'react';
import { Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const HeaderPart = () => {
  return (
    <div>
      <Header as='h1' dividing textAlign='center'>
        <Header.Content>
            Header Part
        <Header.Subheader>Links</Header.Subheader>
        </Header.Content>
      </Header>
      <br />

    </div>

  );
}

export default HeaderPart;
