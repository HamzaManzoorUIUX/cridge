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
            <nav className='MainNav'>
                <Container fixed>
                    <a href='!#' className={classes.BrandLogo}>
                        cridge
            </a>
                    <div className={`h-Navmenu ${showMenu}`}>
                        <ul className={classes.navMenu}>
                            <li className='h-nav-link ' onClick={() => { productToggle() }}>
                                <div className='dropText'>
                                    Products <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 dropIcon ${productDrop}`} />
                                </div>
                                <DropDown show={productDrop} />
                            </li>
                            <li className='h-nav-link' onClick={() => { solutionToggle() }}>
                                <div  className='dropText'>
                                    Solutions <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 dropIcon ${solutionDrop}`} />
                                </div>
                                <DropDown show={solutionDrop} />
                            </li>
                            <li className='h-nav-link'>
                                Pricing
                </li>
                        </ul>
                        <ul className={classes.navBtn}>
                            <li className='h-navBtn-item'>
                                <a href='!#' className='logIn'>
                                    <img src={Lock} className={classes.lockIcon}  alt='lock'/>  Login
                    </a>
                            </li>
                            <li className='h-navBtn-item'>
                                <Button className='signUpBtn' variant="contained" color="secondary">
                                    SignUp
                    </Button>
                            </li>
                        </ul>
                        <div className={`md-none ${classes.mobileList}`}>
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
                    <IconButton edge="start" className='menuButton' color="inherit" aria-label="menu" onClick={() => { menuToggle() }}>
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