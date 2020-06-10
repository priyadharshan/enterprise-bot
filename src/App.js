import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './features/login'
import { Header } from './header'
import './App.css';

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

