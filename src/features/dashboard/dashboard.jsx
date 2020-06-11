import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import Grid from '@material-ui/core/Grid';
import { IntentList } from './intent-list'
import { IntentDetails } from './intent-details'
import { LinearLoader } from '../../components/linear-loader'
import IconButton from '@material-ui/core/IconButton';

import './dashboard.css'

export class Dashboard extends Component {

  componentDidUpdate(prevProps) {
    const { tokenDetails, getIntentList } = this.props
    const canFetchIntentList = tokenDetails !== prevProps.tokenDetails

    if (canFetchIntentList) {
      getIntentList();
    }
  }

  getIntentDetails = (intentId) => {
    this.props.getIntentDetails(intentId)
  }

  render() {
    const { intentList, intentDetails, loading } = this.props

    return (
      <div>
        {  isEmpty(intentList) ? <LinearLoader /> :
        <div className="grid">
              <div className="sidenav">
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons intent-list-icons">gps_fixed</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">call_split</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">show_chart</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">settings</i>
              </IconButton>
              </div>
          <Grid container spacing={2} className="grid-background">
            <Grid item xs={3}>
              { !isEmpty(intentList) ? <IntentList intentList={intentList}  getIntentDetails={this.getIntentDetails} /> : null }
            </Grid>
            <Grid item xs={9}>
              { !isEmpty(intentList) ? <IntentDetails intentDetails={intentDetails} loading={loading} /> : null }
            </Grid>
          </Grid>
        </div>
        }
      </div>
    );
  }
}
