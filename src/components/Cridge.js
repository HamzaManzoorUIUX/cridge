import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import NavBar from './NavBar';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { Facebook, LinkedIn, Airbnb, Spotify, minHomePic,Feature1 } from "./ComponetsImp";

const useStyles = makeStyles((theme) => ({
    myParagraphOne: {
        fontSize: '20px',
        fontFamily: 'Roboto',
        color: 'black',
        ['@media (max-width:768px)']: {
            fontSize: '14px',
        }
    },
    textPurple: {
        color: '#4515B1'
    },
    myHeadingOneMargin: {
        marginTop: '48px !important',
        ['@media (max-width:768px)']: {
            marginTop: '42px',
        }
    },
    myHeadingOne: {
        fontSize: '40px',
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        lineHeight: '48px',
        marginBottom: '21px',
        marginTop: '21px',
        ['@media (max-width:768px)']: {
            fontSize: '22px',
            lineHeight: '27px',
        }
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
    center: {
        textAlign: 'center'
    }, minHomePic: {
        maxWidth: '627.6px',
        width: '100%',
        marginTop: '79px',
        ['@media (max-width:768px)']: {
            display: 'none'
        }
    },
    mediaIcons: {
        marginTop: '79px',
        marginBottom: '79px',
        display: 'flex',
        justifyContent: 'space-between',
        '&>img': {
            maxWidth: '142px',
            width: '100%',
            maxHeight: '28px',
        }
    },
    FigureOne: {
        marginTop: '165px',
    },
    FeatureOneText: {
        color: '#4717B3',
        fontSize: '20px',
        fontFamily: 'Roboto',
    },
    FeatureOneImg:{
        maxWidth:'412px',
        width:'100%',
    },
}));
function Cridge(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Container fixed>
                <div className={classes.center}>
                    <h1 className={`${classes.myHeadingOne} ${classes.myHeadingOneMargin}`}>Operational system <div className={classes.textPurple}>for Fast-growth B2B SaaS</div></h1>
                    <p className={classes.myParagraphOne}>
                        Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
                    <Button className={classes.signUpBtn} variant="contained" color="secondary">
                        Sign up
          </Button>
                </div>
                <div className={classes.center}>
                    <img src={minHomePic} className={classes.minHomePic} />
                </div>
                <div className={classes.mediaIcons}>
                    <img src={Facebook} />
                    <img src={LinkedIn} />
                    <img src={Airbnb} />
                    <img src={Spotify} />
                </div>
                <div className={classes.FigureOne}>
                    <Grid container spacing={3}>
                        <Grid item md={6}>
                            <div className={classes.FeatureOneText}>
                                Feature 1
                            </div>
                            <h1 className={classes.myHeadingOne}>Operational system <div>for Fast-growth B2B SaaS</div></h1>
                            <p className={classes.myParagraphOne}>
                                Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr, sed diam nonumy eirmod tempor
                          </p>
                            <Button className={classes.signUpBtn} variant="contained" color="secondary">
                                Sign up
                         </Button>
                        </Grid>
                        <Grid item md={6}>
                            <div>
                                <img src={Feature1} className={classes.FeatureOneImg}/>
                                </div>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
}

export default Cridge;