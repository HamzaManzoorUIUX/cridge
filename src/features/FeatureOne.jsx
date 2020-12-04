import React from 'react';
import { Feature1 } from "../components/ComponetsImp";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    
   
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
    center: {
        textAlign: 'center'
    }, 
  
    FeatureOneText: {
        color: '#4717B3',
        fontSize: '20px',
        fontFamily: 'Roboto',
    },
   
}));

function FeatureOne(props) {
    const classes = useStyles();
    return (
        <div className='FeatureOne'>
        <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                <div className={classes.FeatureOneText}>
                    Feature 1
                </div>
                <h1 className='myHeadingOne'>Operational system <div>for Fast-growth B2B SaaS</div></h1>
                <p className='myParagraphOne'>
                    Lorem ipsum dolor sit amet, consetetur <br />
        sadipscing elitr, sed diam nonumy eirmod tempor
              </p>
                <Button className={classes.signUpBtn} variant="contained" color="secondary">
                    Sign up
             </Button>
            </Grid>
            <Grid item md={6}  xs={12}>
                <div className='FeatureOneImg'>
                    <img src={Feature1} alt="FeatureOneImg"/>
                </div>
            </Grid>
        </Grid>
    </div>
    );
}

export default FeatureOne;