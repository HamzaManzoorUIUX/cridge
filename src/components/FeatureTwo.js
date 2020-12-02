import React from 'react';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    card: {
        padding: '14px 35px',
        maxWidth: '342px',
        border: '1px solid #EBF2FE',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        borderRadius: '4px',
        marginTop: '18px',
        marginBottom: '18px',
        '&>h3': {
            fontSize: '26px',
            fontWeight: "bold",
            marginTop: '0px',
            marginBottom: '10px',
        },
        '&>p': {
            fontSize: '12px',
            fontWeight: "normal",
            marginTop: '0px',
            marginBottom: '0px',
        },
        '&>a': {
            fontSize: '12px',
            fontWeight: "normal",
            marginTop: '0px',
            marginBottom: '0px',
            textDecoration: 'underline',
        },

    },
    FeatureTwoText: {
        color: '#4717B3',
        fontSize: '20px',
        fontFamily: 'Roboto',
    },
    signUpBtn: {
        background: 'linear-gradient(#6B33D6, #4213AE)',
        borderRadius: '2px',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        fontSize: '14px',
        fontFamily: 'Roboto',
        padding: '7px 44px',
        fontWeight: "bold",
        maxWidth: '462px',
        width: '100%',
        margin: 'auto'
    },
}))

function FeatureTwo(props) {
    const classes = useStyles();
    return (
        <div className='featureTwo'>
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
                        SMS solution
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
            <Grid item md={6} sm={12} className='text-md-right' >
                <div className={classes.FeatureTwoText}>
                    Feature 2
                </div>
                <h1 className='myHeadingOne'>
                    Operational system<br/>
                    for Fast-growth B2B SaaS
                </h1>
                <p className='myParagraphOne'>
                    Lorem ipsum dolor sit amet, consetetur<br/>
                    sadipscing elitr, sed diam nonumy eirmod tempor
                </p>
                <Button className={classes.signUpBtn} variant="contained" color="secondary">
                    Sign up
             </Button>
            </Grid>
        </Grid>
        </div>
    );
}

export default FeatureTwo;