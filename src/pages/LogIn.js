import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Message, Confirm
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink, withRouter } from 'react-router-dom';
import * as actionCreators from '../store/actions/index';

export const mapDispatchToProps = (dispatch) => ({
  logIn: (email, password) => dispatch(actionCreators.logIn(email, password)),
});

export class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    loginOk: true,
  };

  loginHandler = () => {
    this.props.logIn(this.state.email, this.state.password)
      .then(() => { this.props.history.push('/'); })
      .catch((error) => {
        if (error.response.status === 401) this.setState({ loginOk: false });
      });
  };

  confirmClose = () => {
    this.setState({ loginOk: true });
  }

  render() {
    return (
      <Grid className="login" id="login" textAlign="center">
        <Grid.Row id="secondRow" style={{ height: 'calc(100vh - 165px)' }} verticalAlign="middle">
          <Grid.Column id="rowColumn" style={{ maxWidth: 450, minWidth: 300 }}>
            <Header id="surBing" style={{ fontSize: '4em' }} as="h1" textAlign="center">
             로그인
            </Header>
            <Form size="large">
              <Segment stacked id="loginStack">
                <Form.Input
                  className="email"
                  onChange={(event) => this.setState({ email: event.target.value })}
                  value={this.state.email}
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="email"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={(event) => this.setState({ password: event.target.value })}
                />
                <Button
                  id="loginbutton"
                  className="loginbutton"
                  disabled={!this.state.email || !this.state.password}
                  onClick={() => this.loginHandler()}
                  fluid
                  size="large"
                >
                  Log In
                </Button>

                <Confirm
                  id="loginConfirm"
                  open={!this.state.loginOk}
                  onConfirm={this.confirmClose}
                  cancelButton={null}
                  content="Wrong ID or Password."
                />
              </Segment>
            </Form>
            <Message>
        New to us?
              {' '}
              <NavLink to="/signup" exact>
                {'  '}
Sign Up
              </NavLink>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null, mapDispatchToProps)(withRouter(LoginPage));
