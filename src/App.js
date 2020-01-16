import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HeaderPart from './components/Header';
import Main from './pages/Main';
import MyCalendar from './pages/MyCalendar';
import Board from './pages/Board';

function App() {
  return (
    <div>
      <BrowserRouter>
        <HeaderPart />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/mycalendar" component={MyCalendar} />
          <Route exact path="/board" component={Board} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
