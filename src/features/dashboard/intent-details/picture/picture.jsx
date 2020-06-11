import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import './picture.css'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
      },
    },
}));


export const Picture = memo(() => {
    const classes = useStyles();

  return (
      <div className="suggestion-block">
      <div className="suggestion-container">
      <i class="material-icons suggestion-icon">insert_photo</i>
      <span className="suggestion-text">PICTURE</span>
      
      <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
      </div>
      <div className={classes.root}>
      <Paper>
      <div className="suggestion-controls picture">
      <i class="material-icons intent-list-icons add-photo">add_a_photo</i>
      <small class="add-suggestion upload-text">Upload image</small>
      </div>
      </Paper>
      <Paper>
      <div className="suggestion-controls picture">
      <i class="material-icons intent-list-icons addphoto">add</i>
      </div>
      </Paper>
    </div>
    </div> 
  ) 

})