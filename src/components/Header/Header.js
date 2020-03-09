import React, { Component } from 'react';
import { Grid,Header, Image, Icon, Segment, Sticky, Menu } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import image from '../../images/logo.PNG';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';
import '../Calendar/Calendar.css';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';

export const mapStateToProps = (state) => ({
  pageName : state.ev.pageName,
});

export class HeaderPart extends Component {

  render() {
    return(
      console.log(this.props.pageName),
      <Sticky context = {this.props.contextRef} className="TopBar" style={{ xIndex: 1 }} >
        <Segment style={{padding: 30, marginBottom: 0,'vertical-align': 'middle', width: 'auto', height: 'auto'}}>
        <Grid columns={3} verticalAlign="middle">
            <Grid.Column style={{width:'60%'}}>
              <Header style={{ textAlign: 'left', cursor: 'pointer' }} size="huge" textAlign="center">
                <Image style={{height:'100%', width:'auto'}} src={image} onClick={() => this.props.history.push('/')} fluid/>
              </Header>
            </Grid.Column>
            <Grid.Column style={{width:'20%', textAlign: 'center' }}>
              <Profile />
            </Grid.Column>
            <Grid.Column style={{width:'20%', textAlign: 'center' }} floated="right">
              <Icon name='setting' size='big'/>
            </Grid.Column>
          </Grid>

          <Grid style={{ maxHeight: '40px', height: 'auto', marginTop: -20, marginBottom : 20}}>
            <Grid.Column style={{ height: 'auto' }}>
              <SearchBar/>
            </Grid.Column>
          </Grid>
      </Segment>
      <Menu className="UtilBar" pointing secondary style={{margin : 0, backgroundColor: 'white', 'font-size' : '20px' }}>
        <Menu.Item
          className="Calendar"
          active={this.props.pageName === 'Calendar'}
          onClick={() => this.props.history.push('/')}
        >
          행사캘린더
        </Menu.Item>

        <Menu.Item
          className="MyCalendar"
          active={this.props.pageName === 'MyCalendar'}
          onClick={() => this.props.history.push('/mycalendar')}
        >
          내캘린더
        </Menu.Item>

        <Menu.Item
          style={{width:145.71}}
          className="Board"
          active={this.props.pageName === 'Board'}
          onClick={() => this.props.history.push('/board')}
        >
            홍보게시판
        </Menu.Item>
      </Menu>
      </Sticky>
    )
  }
  
};

export default connect(mapStateToProps, null)(withRouter(HeaderPart));
