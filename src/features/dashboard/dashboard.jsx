import React, { Component } from 'react'
import { isEmpty } from 'ramda'
import Grid from '@material-ui/core/Grid';
import { IntentList } from './intent-list'
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

  render() {
    const { intentList } = this.props

    return (
      <div>
        {  isEmpty(intentList) ? <LinearLoader /> :
        <div className="grid">
          <Grid container spacing={4} className="grid-background">
            <Grid item xs={1}>
              <div className="sidenav">
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">important_devices</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">important_devices</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">important_devices</i>
              </IconButton>
              <IconButton aria-label="menu" className="sidebar-icon">
              <i class="material-icons">important_devices</i>
              </IconButton>
              </div>
            </Grid>
            <Grid item xs={3}>
              { !isEmpty(intentList) ? <IntentList intentList={intentList} /> : null }
            </Grid>
            <Grid item xs={7}>
              
            </Grid>
            <Grid item xs={1}>
              
            </Grid>
          </Grid>
        </div>
        }
      </div>
    );
  }
}
