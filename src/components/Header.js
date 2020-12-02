import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Facebook, LinkedIn, Airbnb, Spotify, minHomePic } from "./ComponetsImp";

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
    }, 
    minHomePic: {
        maxWidth: '627.6px',
        width: '100%',
        marginTop: '79px',
        ['@media (max-width:768px)']: {
            display: 'none'
        }
    },
    mediaIcons: {
        marginTop: '58px',
        marginBottom: '58px',
        display: 'flex',
        justifyContent: 'space-between',
        ['@media (max-width:991px)']: {
            flexWrap:'wrap',
        },
        '&>img': {
            flexGrow:'1',
            maxWidth: '142px',
            width: '100%',
            ['@media (max-width:991px)']: {
                maxWidth: '110px',
            }
        },
        '&>div':{
            marginTop:'21px',
            marginBottom:'21px',

            ['@media (max-width:991px)']: {
                minWidth:'50%',
            }
        }
    },
    smRight:{
        ['@media (max-width:991px)']: {
            textAlign:"right"
        }
    },
    smLeft:{
        ['@media (max-width:991px)']: {
            textAlign:"left"
        }
    }
}));

function Header(props) {
    const classes = useStyles();
    return (
        <div>
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
                    <div className={classes.smLeft}>
                    <img src={Facebook} />
                    </div>
                    <div className={classes.smRight}>
                    <img src={LinkedIn} />
                    </div>
                    <div  className={classes.smLeft}>
                    <img src={Airbnb} />
                    </div>
                    <div className={classes.smRight}>
                    <img src={Spotify} />
                    </div>
                </div>
               
        </div>
    );
}

export default Header;