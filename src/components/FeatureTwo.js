import React from 'react';
import { Grid } from '@material-ui/core'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    card: {
        padding: '14px 35px',
        maxWidth: '342px',
        border: '1px solid #EBF2FE',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        borderRadius: '4px',
        marginTop:'18px',
        marginBottom:'18px',
        '&>h3': {
            fontSize: '26px',
            fontWeight: "bold",
            marginTop:'0px',
            marginBottom:'10px',
        },
        '&>p': {
            fontSize: '12px',
            fontWeight: "normal",
            marginTop:'0px',
            marginBottom:'0px',
        },
        '&>a': {
            fontSize: '12px',
            fontWeight: "normal",
            marginTop:'0px',
            marginBottom:'0px',
            textDecoration:'underline',
        },

    }
}))

function FeatureTwo(props) {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item md={6} sm={12}>
            <div className={classes.card}>
                    <h3>
                        Emailing solution
               </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor
               </p>
                    <a href='!#'>
                        Learn more about this feature
               </a>
                </div>
                <div className={classes.card}>
                    <h3>
                        Emailing solution
               </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod tempor
               </p>
                    <a href='!#'>
                        Learn more about this feature
               </a>
                </div>
           
            </Grid>
            <Grid item md={6} sm={12}></Grid>
        </Grid>
    );
}

export default FeatureTwo;