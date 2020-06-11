import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './suggestions.css'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export const Suggestions = memo(({ suggestions }) => {
  console.log(suggestions)
  const classes = useStyles();

  return (
      <div className="suggestion-block">
      <div className="suggestion-container">
      <i class="material-icons suggestion-icon">wb_incandescent</i>
      <span className="suggestion-text">SUGGESTIONS</span>
      
      <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
      </div>
            <div className="suggestion-section">
            <div className={classes.root}>
            {suggestions.map((suggestion) => (
                <Button variant="contained" size="small" className="suggestion-button">
                    {suggestion}  <i class="material-icons clear-icon">clear</i>
                </Button>
              ))}
              <div className="suggestion-controls">
              <i class="material-icons intent-list-icons">add</i>
              <small class="add-suggestion">Add Suggestions...</small>
              </div>
             
            
          </div>
        </div>
    </div> 
  ) 

})