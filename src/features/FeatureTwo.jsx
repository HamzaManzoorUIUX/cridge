import React from 'react';
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    featureTwo: {
        marginTop: 200,
        marginBottom: 300,
        [theme.breakpoints.down('md')]: {
            marginTop: 70,
            marginBottom: 70
        }
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
    flexRes: {
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column-reverse'
        }
    },
    featurTwoCard: {
        padding: '14px 35px',
        maxWidth: 342,
        border: '1px solid #EBF2FE',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        borderRadius: 4,
        marginTop: 18,
        marginBottom: 18,
        '&>a':{
            fontSize: 12,
  fontWeight: 'normal',
  marginTop: 0,
  marginBottom: 0,
  textDecoration: 'underline'
        },
        '&>h3':{
            fontSize: 26,
            fontWeight: 'bold',
            marginTop: 0,
            marginBottom: 10
        },
        '&>p' :{
            fontSize: 12,
            fontWeight: 'normal',
            marginTop: 0,
            marginBottom: 0
          },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            maxWidth: '100%'
        }
    },
    textRight:{
        textAlign: 'right',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center !important'
        }
    },
    myHeadingOne: {
        fontSize: 40,
        fontWeight: 'bold',
        lineHeight: '48px',
        marginBottom: 21,
        marginTop: 21,
        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
            lineHeight: '27px'
        }
    },
    myParagraphOne: {
        fontSize: 20,
        color: 'black',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14 
        }
    },
}))

function FeatureTwo(props) {
    const classes = useStyles();
    return (
        <div className={classes.featureTwo}>
            <Grid container className={classes.flexRes}>
                <Grid item xs={12} md={6} sm={12}>
                    <div className={classes.featurTwoCard}>
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
                    <div className={classes.featurTwoCard}>
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
                <Grid item xs={12} md={6} sm={12} className={classes.textRight} >
                    <div className={classes.FeatureTwoText}>
                        Feature 2
                </div>
                    <h1 className={classes.myHeadingOne}>
                        Operational system<br />
                    for Fast-growth B2B SaaS
                </h1>
                    <p className={classes.myParagraphOne}>
                        Lorem ipsum dolor sit amet, consetetur<br />
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