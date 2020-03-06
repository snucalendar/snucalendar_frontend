import React, { Component } from 'react';
import { Grid,Header, Image, Icon, Segment, Sticky, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import image from '../../images/calendar.png';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import '../Calendar/Calendar.css';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => ({
  pageName : state.ev.pageName,
});

export class HeaderPart extends Component {
  state = {
    pageName : '',
  }

  render() {
    return(
    <div>
      <Sticky context = {this.props.contextRef} className="TopBar" style={{ xIndex: 1 }} >
        <Segment style={{padding: 30, marginBottom: 0,'vertical-align': 'middle', height: '200px'}}>
        <Grid colums={3} style={{ 'vertical-align': 'middle',minWidth: '800px' }}>
          <Grid.Row verticalAlign="middle" style={{'vertical-align': 'middle'}}>
            <Grid.Column style={{ minWidth: 200 }}><Header style={{ cursor: 'pointer' }} size="huge" textAlign="center"><Image style={{width: 150, height:150}} src={image} onClick={() => this.props.history.push('/')} fluid/></Header></Grid.Column>
            <Grid.Column style={{ width:'60%'}}>
              <SearchBar/>
            </Grid.Column>
            <Grid.Column style={{ minWidth: '180px' }} floated="right"><Profile /></Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Menu className="UtilBar" pointing secondary style={{margin : 0, backgroundColor: 'white', 'font-size' : '20px' }}>
        <Menu.Item
          className="Calendar"
          active={this.state.menu === 'Calendar'}
          onClick={() => this.props.history.push('/')}
        >
          행사캘린더
        </Menu.Item>

        <Menu.Item
          className="MyCalendar"
          active={this.state.menu === 'MyCalendar'}
          onClick={() => this.props.history.push('/mycalendar')}
        >
          내캘린더
        </Menu.Item>

        <Menu.Item
          style={{width:145.71}}
          className="Board"
          active={this.state.menu === 'Board'}
          onClick={() => this.props.history.push('/board')}
        >
            홍보게시판
        </Menu.Item>
      </Menu>
      </Sticky>
    </div>
    )
  }
  
};

export default connect(mapStateToProps, null)(withRouter(HeaderPart));
