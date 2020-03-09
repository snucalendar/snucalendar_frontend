import React, { Component } from 'react';
import {
  Button, Dropdown, Icon, Segment,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(actionCreators.logOut()),
  getUserInfo: () => dispatch(actionCreators.getUserInfo()),
  });

export const mapStateToProps = (state) => ({
  username: state.us.info.username,
});

export class Profile extends Component {
  logoutHandler = () => {
    this.props.logOut()
      .then(() => { window.location.assign('/'); });
  };
  
  componentDidUpdate(prev) {
    if (prev != this.props) {
      this.props.getUserInfo();
      this.forceUpdate();
    }
  }
  
  componentDidMount() {
    this.props.getUserInfo();
  }
  
  render() {
    if (this.props.username != '') {
      return (
        <Dropdown className="DropDownClass" id="DropDownClass" style={this.props.style} as={Button} text="내 정보" size="large" direction="left">
          <Dropdown.Menu className="Menu" id="Menu" as={Segment}>
            <Dropdown.Item id="upperItem" onClick={() => this.props.history.push('/mypage/')}>
              <Icon centered name="user circle" className="UserIcon" size="huge" />
              <div id="username">
                {'Hello, '}
                {this.props.username}
                {' !'}
              </div>
            </Dropdown.Item>
            <Dropdown.Item className="logOut" id="logOut" onClick={() => this.logoutHandler()} basic as={Button} floating>
            <Icon id="keyIcon" name="key" />
              로그아웃
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
    }
  
    return (
      <Button
        id="LoginButton"
        icon="user"
        size="large"
        style={{
          margin: 25, backgroundColor: '#FFFFFF', width: 110, color: 'black',
        }}
        onClick={() => this.props.history.push('/login')}
      >
        로그인
      </Button>
    );
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile));
  