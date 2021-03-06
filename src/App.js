import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderPart from './components/Header/Header';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Main from './pages/Main';
import MyCalendar from './pages/MyCalendar';
import Board from './pages/Board';
import Search from './pages/Search';

import './index.css';

function App() {
  return (
    <div>
      <HeaderPart />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mycalendar" component={MyCalendar} />
          <Route exact path="/board" component={Board} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/search" component={Search} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

