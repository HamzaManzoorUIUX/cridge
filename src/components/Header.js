import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import { Facebook, LinkedIn, Airbnb, Spotify, minHomePic } from "./ComponetsImp";

const useStyles = makeStyles((theme) => ({
    
    textPurple: {
        color: '#4515B1'
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
   
   
    
}));

function Header(props) {
    const classes = useStyles();
    return (
        <div>
             <div className={classes.center}>
                    <h1 className={`myHeadingOneMargin myHeadingOneMargin`}>Operational system <div className={classes.textPurple}>for Fast-growth B2B SaaS</div></h1>
                    <p className='myParagraphOne'>
                        Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr, sed diam nonumy eirmod tempor
          </p>
                    <Button className={classes.signUpBtn} variant="contained" color="secondary">
                        Sign up
          </Button>
                </div>
                <div className={classes.center}>
                    <img src={minHomePic} className={'minHomePic'} alt='minHomePic' />
                </div>
                <div className='mediaIcons'>
                    <div className='smLeft'>
                    <img src={Facebook} alt='Facebook'/>
                    </div>
                    <div className='smRight'>
                    <img src={LinkedIn} alt='LinkedIn'/>
                    </div>
                    <div  className='smLeft'>
                    <img src={Airbnb}  alt='Airbnb'/>
                    </div>
                    <div className='smRight'>
                    <img src={Spotify} alt='Spotify'/>
                    </div>
                </div>
               
        </div>
    );
}

export default Header;