import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './features/login'
import { Dashboard } from './features/dashboard'
import { Header } from './header'
import './App.css';

export function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

