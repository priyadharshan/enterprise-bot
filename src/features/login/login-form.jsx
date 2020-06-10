import React, { Component } from 'react'
import { Login } from './login'

export class LoginForm extends Component {
  render() {
    return (
        <Login getTokenDetails={this.props.getTokenDetails} />
    );
  }
}
