import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css';


import axios from 'axios';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
axios.get('/api/token')


const history = createBrowserHistory();
ReactDOM.render(<Provider store={store}><BrowserRouter history={history}><App /></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

