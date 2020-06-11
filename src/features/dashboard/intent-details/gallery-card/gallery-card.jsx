import React, { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
      maxWidth: 170,
    },
    media: {
      height: 140,
    },
  });


export const GalleryCard = memo(() => {
    const classes = useStyles();

  return (
      <div className="suggestion-block">
      <div className="suggestion-container">
      <i class="material-icons suggestion-icon">collections</i>
      <span className="suggestion-text">GALLERY CARD</span>
      
      <div class="display-name-icons">
          <i class="material-icons delete-outline-icon">delete_outline</i>
        </div>
      </div>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Enterprise bot"
        />
        <CardContent>
          <Typography gutterBottom component="h4">
            Title required
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Description
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <div className="suggestion-controls">
      <i class="material-icons intent-list-icons">add</i>
      <small class="add-suggestion">Add Button</small>
      </div>
      </CardActions>
    </Card>
    </div> 
  ) 

})