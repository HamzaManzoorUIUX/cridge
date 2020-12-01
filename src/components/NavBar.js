import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from './ExpandMoreIcon';
import Lock from '../assets/icons/lock.svg';
import DropDownProd from "./DropDownProd";
import DropDownSol from "./DropDownSol";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
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
    navMenu: {
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
    nav: {
        position: 'relative',
        zIndex: 3,
        backgroundColor: 'white',
        '&>.MuiContainer-root': {
            display: 'flex',
            justifyContent: 'space-between',
            height: '93px',
            alignItems: 'center',
            ['@media (max-width:991px)']: {
                height: '87px',
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
    signUpBtn: {
        background: 'linear-gradient(#6B33D6, #4213AE)',
        borderRadius: '2px',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        fontSize: '14px',
        fontFamily: 'Roboto',
        padding: '7px 44px',
        fontWeight: "bold",
        ['@media (max-width:991px)']: {
            marginBottom: '79px',
        }
    },
    logIn: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        padding: '7px 44px',
        color: 'black',
        textDecoration: 'none',
        fontWeight: "bold",
        display: 'block',
        ['@media (max-width:991px)']: {
            padding: '7px 16px',
            minWidth: 'max-content'
        }
    },
    lockIcon: {
        height: '9.5px',
        width: '7.13px',
        marginRight: '8px'
    },
    menuButton: {
        color: '#4717B3',
        ['@media (min-width:991px)']: {
            display: 'none'
        }
    },
    menu: {
        display: 'flex',
        flexGrow: 1,
        ['@media (max-width:991px)']: {
            display: 'none',
            transition: 'easing',
            position: "absolute",
            backgroundColor: 'white',
            zIndex: 2,
            flexDirection: "column",
            top: '87px',
            left: '0px',
            right: '0px',
            paddingTop: '21px',
            '&.show': {
                display: 'block !important'
            },
            '&>ul': {
                flexDirection: "column",
                marginTop: '0px',
                marginBottom: '0px',
                '&>li': {
                    margin: '14px auto',
                    textAlign: 'center',
                    width: '100%',
                }
            }
        }
    },
    mobileList: {
        ['@media (min-width:991px)']: {
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
        <div className='position-relative'>
            <nav className={classes.nav}>
                <Container fixed>
                    <a href='!#' className={classes.BrandLogo}>
                        cridge
            </a>
                    <div className={`${classes.menu} ${showMenu}`}>
                        <ul className={classes.navMenu}>
                            <li className='h-nav-link ' onClick={() => { productToggle() }}>
                                <div className='dropText'>
                                    Products <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 dropIcon ${productDrop}`} />
                                </div>
                                <DropDownProd show={productDrop} />
                            </li>
                            <li className='h-nav-link' onClick={() => { solutionToggle() }}>
                                <div  className='dropText'>
                                    Solutions <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 dropIcon ${solutionDrop}`} />
                                </div>
                                <DropDownSol show={solutionDrop} />
                            </li>
                            <li className='h-nav-link'>
                                Pricing
                </li>
                        </ul>
                        <ul className={classes.navBtn}>
                            <li className='h-navBtn-item'>
                                <a href='!#' className={classes.logIn}>
                                    <img src={Lock} className={classes.lockIcon} />  Login
                    </a>
                            </li>
                            <li className='h-navBtn-item'>
                                <Button className={classes.signUpBtn} variant="contained" color="secondary">
                                    SignUp
                    </Button>
                            </li>
                        </ul>
                        <div className={classes.mobileList}>
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