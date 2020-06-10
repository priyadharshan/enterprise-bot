import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Login } from './features/login'
import './App.css';

export function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        </header>
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

