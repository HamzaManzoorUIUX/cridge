import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '../components/ExpandMoreIcon';
import Lock from '../assets/icons/lock.svg';
import DropDown from "../components/DropDown";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    pRelative:{
        position:'relative'
    },
    root: {
        flexGrow: 1,
    },
    BrandLogo: {
        fontFamily: 'Roboto',
        fontSize: '26px',
        fontWeight: "bold",
        textTransform: "uppercase",
        textDecoration: 'none',
        color: 'black',
        display: 'flex',
        alignItems: 'center',
        marginRight: '21px'
    },
    navMenuUl: {
        listStyleType: 'none',
        paddingLeft: '0px',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',

        '&>li': {
            fontFamily: 'Roboto',
            fontSize: '16px',
            fontWeight: "bold",
            marginRight: '20px',
            marginLeft: '20px',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: "column",
            cursor: 'pointer',
            '&>div.dropText': {
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
            }

        }
    },
 
    navBtn: {
        listStyleType: 'none',
        paddingLeft: '0px',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        '&>li': {
            cursor: 'pointer',

        }

    },

    lockIcon: {
        height: '9.5px',
        width: '7.13px',
        marginRight: '8px'
    },
  
  
    mobileList: {
        [theme.breakpoints.up('md')]:{
            display: 'none'
        },
        '&>.MuiContainer-root': {
            display: 'flex',
            justifyContent: 'space-between',
        },
        '&>div>ul': {
            listStyleType: 'none',
            margin: '0px',
            padding: '0px',
            marginBottom: '156px',
            '&>li': {
                marginTop: '10.5px',
                marginBottom: '10.5px',
            },
            '&>li>a': {
                fontSize: '18px',
                textDecoration: 'underline',
                color: 'black',
            }
        },
        '&>div': {
            fontSize: '18px',
        },
    },
    backShadow: {
        backgroundColor: 'rgba(71,23,179,0.4)',
        position: 'fixed',
        top: '0px',
        left: '0px',
        right: '0px',
        bottom: '0px',
        zIndex: '1',
    },
    MainNav:{
        position: 'relative',
        zIndex: 3,
        backgroundColor: 'white'
        
      },
      Navmenu:{
        display: 'flex',
        flexGrow: 1,
        [theme.breakpoints.down('md')]:{
            display: 'none',
            transition: 'ease-in',
            position: 'absolute',
            backgroundColor: 'white',
            zIndex: 2,
            flexDirection: 'column',
            top: 87,
            left: 0,
            right: 0,
            paddingTop: 21,
            '&.show':{
                display: 'block !important'
              },
              '&>ul': {
                flexDirection: 'column',
                marginTop: 0,
                marginBottom: 0,
                '&>li': {
                    margin: '14px auto',
                    textAlign: 'center',
                    width: '100%',
                  }
              }
        }
      },
      logIn :{
        fontSize: 16,
        padding: '7px 44px',
        color: 'black',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'block',
        [theme.breakpoints.down('md')]:{
            padding: '7px 16px',
            minWidth: 'max-content'
        }
      },
      signUpBtn :{
        background: 'linear-gradient(#6B33D6, #4213AE)',
        borderRadius: 2,
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        fontSize: '14px',
        padding: '7px 44px',
        fontWeight: 'bold',
        [theme.breakpoints.down('sm')]:{
        marginBottom: 79
      }
      },
      menuButton:{
        color: '#4717B3',
        [theme.breakpoints.up('md')]:{
            display: 'none'
          }
      },
      dropIcon:{
          marginLeft:'.5rem',
          '&.true':{
            transform: 'rotateZ(180deg)',
            transition: 'all'
          }
      },
      container:{
        display: 'flex',
        justifyContent: 'space-between',
        height: 93,
        alignItems: 'center'
      }
}));

function NavBar(props) {
    const classes = useStyles();
    const [productDrop, setproductDrop] = useState(false);
    const [solutionDrop, setsolutionDrop] = useState(false);
    const [showMenu, setshowMenu] = useState('hide')
    const shadowClick=()=>{
        setshowMenu('hide')
            setproductDrop(false)
            setsolutionDrop(false)
    }
    const menuToggle = () => {
        if (showMenu === 'hide') {
            setshowMenu('show')
        }
        else {
            setshowMenu('hide')
            setproductDrop(false)
            setsolutionDrop(false)
        }
    }
    const productToggle = () => {
        setsolutionDrop(false)
        if (productDrop === false) {
            setproductDrop(true)
        }
        else if (productDrop === true) {
            setproductDrop(false)
        }
    }
    const solutionToggle = () => {
        setproductDrop(false)
        if (solutionDrop === false) {
            setsolutionDrop(true)
        }
        else if (solutionDrop === true) {
            setsolutionDrop(false)
        }
    }
    return (
        <div className={classes.pRelative}>
            <nav className={classes.MainNav}>
                <Container fixed className={classes.container}>
                    <a href='!#' className={classes.BrandLogo}>
                        cridge
            </a>
                    <div className={`${classes.Navmenu} ${showMenu}`}>
                        <ul className={classes.navMenuUl}>
                            <li >
                                <div className='dropText' onClick={() => { productToggle() }}>
                                    Products <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`${classes.dropIcon} ${productDrop}`} />
                                </div>
                                <DropDown show={productDrop} />
                            </li>
                            <li >
                                <div  className='dropText' onClick={() => { solutionToggle() }}>
                                    Solutions <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`${classes.dropIcon} ${solutionDrop}`} />
                                </div>
                                <DropDown show={solutionDrop} />
                            </li>
                            <li >
                                Pricing
                </li>
                        </ul>
                        <ul className={classes.navBtn}>
                            <li>
                                <a href='!#' className={classes.logIn}>
                                    <img src={Lock} className={classes.lockIcon}  alt='lock'/>  Login
                    </a>
                            </li>
                            <li>
                                <Button className={classes.signUpBtn} variant="contained" color="secondary">
                                    SignUp
                    </Button>
                            </li>
                        </ul>
                        <div className={`${classes.mobileList}`}>
                            <Container fixed >
                                <ul>
                                    <li>
                                        <a href='!#'>
                                            Email us
        </a>
                                    </li>
                                    <li>
                                        <a href='!#'>
                                            Follow us
        </a>
                                    </li>
                                    <li>
                                        <a href='!#'>
                                            Changelog
        </a>
                                    </li>
                                    <li>
                                        <a href='!#'>
                                            Privacy
        </a>
                                    </li>
                                    <li>
                                        <a href='!#'>
                                            Cookies
        </a>
                                    </li>
                                    <li>
                                        <a href='!#'>
                                            Terms
        </a>
                                    </li>
                                </ul>
                                <div>
                                    &copy; 2020
</div>
                            </Container>
                        </div>
                    </div>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => { menuToggle() }}>
                        {showMenu === 'hide' ? <MenuIcon /> : <CloseIcon />}
                    </IconButton>
                </Container>
               

            </nav>
            {
                    productDrop===true||solutionDrop===true||showMenu==='show'?<div className={classes.backShadow} onClick={()=>{shadowClick()}}></div>:<></>
                }
        </div>
    );
}

export default NavBar;