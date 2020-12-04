import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Facebook, LinkedIn, Airbnb, Spotify, minHomePic } from "../components/ComponetsImp";

const useStyles = makeStyles((theme) => ({

    textPurple: {
        color: '#4515B1'
    },
    myHeadingOneMargin: {
        marginTop: 48,
        [theme.breakpoints.down('sm')]: {
            marginTop: 42
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
    },
    myParagraphOne: {
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    },
    minHomePic: {
        maxWidth: 627.6,
        width: '100%',
        marginTop: 79,
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    mediaIcons: {
        marginTop: 58,
        marginBottom: 58,
        display: 'flex',
        justifyContent: 'space-between',
        '&>div':{
            marginTop: 21,
            marginBottom: 21
          },
          '&>img' :{
            flexGrow: 1,
            maxWidth: 142,
            width: '100%'
          },
        [theme.breakpoints.down('sm')]: {
            flexWrap: 'wrap',
            '&>div':{
                minWidth: '50%',
              },
              '&>img' :{
                maxWidth: 110
              }
        }
    },
    smLeft: {
        textAlign: 'left'
    }
    , smRight: {
        textAlign: 'right'
    }
}));

function Header(props) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.center}>
                <h1 className={classes.myHeadingOneMargin}>Operational system
                     <div className={classes.textPurple}>for Fast-growth B2B SaaS</div></h1>
                <p className={classes.myParagraphOne}>
                    Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
                <Button className={classes.signUpBtn} variant="contained" color="secondary">
                    Sign up
          </Button>
            </div>
            <div className={classes.center}>
                <img src={minHomePic} className={classes.minHomePic} alt='minHomePic' />
            </div>
            <div className={classes.mediaIcons}>
                <div className={classes.smLeft}>
                    <img src={Facebook} alt='Facebook' />
                </div>
                <div className={classes.smRight}>
                    <img src={LinkedIn} alt='LinkedIn' />
                </div>
                <div className={classes.smLeft}>
                    <img src={Airbnb} alt='Airbnb' />
                </div>
                <div className={classes.smRight}>
                    <img src={Spotify} alt='Spotify' />
                </div>
            </div>

        </div>
    );
}

export default Header;