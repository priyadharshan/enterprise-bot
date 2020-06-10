import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../../components/loader'
import './login.css'

export class Login extends Component {
  render() {
    return (
      <div>
        <Loader loading={true} />
      </div>
    );
  }
}

Login.propTypes = {
  loading: PropTypes.bool.isRequired,
}