import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Form, Grid, Header, Segment, Message, Confirm,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { NavLink } from 'react-router-dom';
import * as actionCreators from '../store/actions/index';
import axios from 'axios';

let token = localStorage.getItem("token")
axios.defaults.headers.common['Authorization'] = token

export class SignupPage extends Component {
  state = {
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
    email_error: false,
    username_error: false,
    password_error: false,
    password_confirmation_error: false,
    signupOk: true,
  }

  validate = () => {
    this.setState({
      email_error: (this.state.email === ''),
      username_error: (this.state.username === ''),
      password_error: (this.state.password === ''),
      password_confirmation_error: (this.state.password !== this.state.password_confirmation),
    });
  }


  signupHandler = () => {
    this.validate();
    if (!this.state.email_error
        && !this.state.password_error
        && !this.state.password_confirmation_error) {
      this.props.signUp(this.state.username, this.state.email, this.state.password)
        .then(() => {
          this.props.history.push('/login');
        })
        .catch((error) => {
          if (error.response.status === 400) this.setState({ signupOk: false });
        });
    }
  }

  confirmClose = () => {
    this.setState({ signupOk: true });
  }

  render() {
    return (
      <Grid textAlign="center" columns={3} divided>
        <Grid.Row style={{ height: 'calc(100vh - 80px)' }} id="secondRow" verticalAlign="middle">
          <Grid.Column style={{ maxWidth: 450, minWidth: 300 }} width="8">
            <div id="signupForm">
              <Header as="h1" id="surBing" textAlign="center">
                회원가입
              </Header>
              <Form size="large">
                <Segment id="signupSeg" stacked>
                  <Form.Input className="Email" fluid icon="mail outline" iconPosition="left" placeholder="E-mail address" value={this.state.email} onChange={(e) => { this.setState({email: e.target.value}); this.validate(); }} error={this.state.email_error} />
                  <Form.Input className="UserName" fluid icon="user" iconPosition="left" placeholder="Username" value={this.state.username} onChange={(e) => { this.setState({username: e.target.value}); this.validate(); }} error={this.state.username_error} />
                  <Form.Input
                    className="Password"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password"
                    type="password"
                    error={this.state.password_error}
                    value={this.state.password}
                    onChange={(e) => { this.setState({password: e.target.value}); this.validate(); }}
                  />
                  <Form.Input
                    className="PasswordComfirmation"
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Password confirmation"
                    type="password"
                    error={this.state.password_confirmation_error}
                    value={this.state.password_confirmation}
                    onChange={(e) => { this.setState({password_confirmation: e.target.value}); this.validate(); }}
                  />
                  <Button
                    id="signupButton"
                    fluid
                    size="large"
                    onClick={() => this.signupHandler()}
                    disabled={!this.state.email || !this.state.username || !this.state.password || !this.state.password_confirmation}
                  >
              Signup
                  </Button>
                  <Confirm
                    id="SignupConfirm"
                    open={!this.state.signupOk}
                    onConfirm={this.confirmClose}
                    cancelButton={null}
                    content="Existing ID."
                  />
                </Segment>
              </Form>
            </div>
            <Message>
        Already signed up?
              {' '}
              <NavLink to="/login" exact>Log In</NavLink>
            </Message>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export const mapDispatchToProps = (dispatch) => ({
  signUp: (username, email, password) => dispatch(actionCreators.signUp(username, email, password)),
});


export default connect(null, mapDispatchToProps)(SignupPage);
// export default SignupPage;
