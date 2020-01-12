import axios from 'axios';
import * as actionTypes from './actionTypes';

const signUp_ = () => ({ type: actionTypes.SIGNUP });
export const signUp = (username, email, password) => {
  const user = { username, email, password };
  return (dispatch) => axios.post('/api/signup/', user)
    .then((res) => {
      dispatch(signUp_());
      return res;
    });
};

const logIn_ = () => ({ type: actionTypes.LOGIN });
export const logIn = (username, password) => {
  const user = { username, password };
  return (dispatch) => axios.post('/api/login/', user)
    .then((res) => {
      dispatch(logIn_());
      return res;
    });
};

const checklogIn_ = () => ({ type: actionTypes.CHECK_LOGIN });
export const checklogIn = () => (dispatch) => axios.get('/api/checklogin/')
  .then(() => {
    dispatch(checklogIn_());
  });

const logOut_ = () => ({ type: actionTypes.LOGOUT });
export const logOut = () => (dispatch) => axios.get('/api/logout/')
  .then(() => {
    dispatch(logOut_());
  });

export const getUserInfo_ = (info) => ({ type: actionTypes.GET_USER_INFO, target: info });
export const getUserInfo = () => (dispatch) => axios.get('/api/userinfo/')
  .then((res) => {
    dispatch(getUserInfo_(res.data));
    return res;
  });
