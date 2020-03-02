import React from 'react';
import { Grid,Header, Image, Icon, Segment, Sticky, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import image from '../images/calendar.png';
import SearchBar from './SearchBar';
import './Header.css';
import './Calendar.css';

export const HeaderPart = (props) => (
  <div >
    <Sticky context = {props.contextRef} className="TopBar" style={{ xIndex: 1 }} >
      <Segment style={{padding: 30, marginBottom: 0,'vertical-align': 'middle', height: '130px'}}>
      <Grid colums={3} style={{ 'vertical-align': 'middle',minWidth: '800px' }}>
        <Grid.Row verticalAlign="middle" style={{'vertical-align': 'middle'}}>
          <Grid.Column style={{ minWidth: 200 }}><Header style={{ cursor: 'pointer' }} size="huge" textAlign="center"><Image src={image} fluid /></Header></Grid.Column>
          <Grid.Column style={{ width:'60%'}}>
            <SearchBar/>
          </Grid.Column>
          <Grid.Column style={{ minWidth: '180px' }} floated="right"><Icon name = 'user' className='userIcon' size='big' /></Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Menu className="UtilBar" pointing secondary style={{margin : 0, backgroundColor: 'white', 'font-size' : '20px' }}>
      <Menu.Item
        className="Calendar"
        active={props.menu === 'Calendar'}
        onClick={() => props.history.push('/')}
      >
        행사캘린더
      </Menu.Item>

      <Menu.Item
        className="MyCalendar"
        active={props.menu === 'MyCalendar'}
        onClick={() => props.history.push('/mycalendar')}
      >
        내캘린더
      </Menu.Item>

      <Menu.Item
        style={{width:145.71}}
        className="Board"
        active={props.menu === 'Board'}
        onClick={() => props.history.push('/board')}
      >
          홍보게시판
      </Menu.Item>
    </Menu>
    </Sticky>
  </div>
);

export default withRouter(HeaderPart);
