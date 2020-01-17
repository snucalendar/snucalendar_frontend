import React from 'react';
import { Grid,Header, Image, Icon, Segment, Sticky, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import image from '../images/calendar.png';
import SearchBar from './SearchBar';
import './Header.css';

export const HeaderPart = (props) => (
    <Sticky className="TopBar" style={{ backgroundColor: '#ffffff', 'x-index': 1 }} >
      <Segment style={{ height: '100px', marginBottom: '-15px' }}>
      <Grid colums={3} style={{ 'min-width': '800px' }}>
        <Grid.Row verticalAlign="middle" style={{ marginBottom: '0px' }}>
          <Grid.Column textAlign="center" style={{ minWidth: 200 }}><Header style={{ cursor: 'pointer' }} size="huge" textAlign="center"><Image src={image} fluid /></Header></Grid.Column>
          <Grid.Column style={{ minWidth: 300 }}><SearchBar minWidth="300px" width="calc(100vw - 500px)"/></Grid.Column>
          <Grid.Column style={{ minWidth: '180px' }} floated="right"><Icon name = 'user' className='userIcon' size='big' /></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Menu size="big" className="UtilBar" pointing secondary style={{ borderRadius: '0px', marginBottom: '-15px', backgroundColor: 'white' }}>
      <Menu.Item
        className="Calendar"
        active={props.menu == 'Calendar'}
        onClick={() => props.history.push('/')}
      >
          행사캘린더
      </Menu.Item>

      <Menu.Item
        className="MyCalendar"
        active={props.menu == 'MyCalendar'}
        onClick={() => props.history.push('/mycalendar')}
      >
          내 캘린더
      </Menu.Item>

      <Menu.Item
        className="Board"
        active={props.menu == 'Board'}
        onClick={() => props.history.push('/board')}
      >
          홍보게시판
      </Menu.Item>
    </Menu>
    </Sticky>
);

export default withRouter(HeaderPart);
