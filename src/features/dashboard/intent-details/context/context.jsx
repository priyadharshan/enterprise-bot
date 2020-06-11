import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './context.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Context = memo(() => {
  const classes = useStyles();

  return (
      <div className="suggestion-block">
      <div className="suggestion-container">
      <i class="material-icons suggestion-icon">cached</i>
      <span className="suggestion-text">CONTEXT</span>
      
      <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">keyboard_arrow_up</i>
        </div>
      </div>
            <div className="suggestion-section context">
            <div className={classes.root}>
              <div className="suggestion-controls">
              <small class="add-suggestion">Add context here...</small>
              </div>
             
            
          </div>
        </div>
    </div> 
  ) 

})