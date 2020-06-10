import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loader } from '../components/loader'
import './dashboard.css'

export class Dashboard extends Component {
  componentDidMount() {
    const { fetchChat, fetchIntents, fetchDetails } = this.props
    fetchChat()
    fetchIntents()
    fetchDetails()
  }

  render() {

    return (
      <div>
        <Loader loading={true} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  loading: PropTypes.bool.isRequired,
}