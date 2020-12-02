import React from 'react';
import {Grid} from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles=makeStyles(()=>({
    card:{
        padding:'14px 40px',
        maxWidth:'342px',
    }
}))

function FeatureTwo(props) {
    const classes=useStyles();
    return (
       <Grid container>
           <Grid item md={6} sm={12}>
               <div className={classes.card}>
               <h3>
               Emailing solution
               </h3>
               </div>
           </Grid>
           <Grid item md={6} sm={12}></Grid>
       </Grid>
    );
}

export default FeatureTwo;