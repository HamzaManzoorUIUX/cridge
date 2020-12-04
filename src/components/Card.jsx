import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 349,
    margin:'auto',
  },
  media: {
    height: 386,
    maxWidth:349,
    width:'100%',
  },
  actionBtn:{
position:"relative",
  },
  cardContent:{
      position:"absolute",
      bottom:0,
      left:0,
      right:0,
      backgroundColor:'#F7FAFE',
      paddingLeft:30,
  },
  CardTitle:{
      fontSize:20,
      fontWeight:"bold",
      maxWidth:226,
  },
  ReadMore:{
     fontSize:17,
     textDecoration:'underline', 
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.actionBtn}>
        <CardMedia
          className={classes.media}
          image={`/static/images/cards/${props.image}`}
          title={`${props.title}`}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.CardTitle}>
          {props.header}
          </Typography>
          <a href='!#' className={classes.ReadMore}>
          Read the article
          </a>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}