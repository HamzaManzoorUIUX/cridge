import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from './ExpandMoreIcon';
import Lock from '../assets/icons/lock.svg';
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
            display:'flex',
            alignItems:'baseline'
        }
    },
    nav: {
        '&>.MuiContainer-root': {
            display: 'flex',
            justifyContent: 'space-between',
            height: '93px',
            alignItems:'center'
        }
    },
    navBtn: {
        listStyleType: 'none',
        paddingLeft: '0px',
        display: 'flex',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',

    },
    signUpBtn: {
        background: 'linear-gradient(#6B33D6, #4213AE)',
        borderRadius: '2px',
        boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)',
        fontSize: '14px',
        fontFamily: 'Roboto',
        padding: '7px 44px',
        fontWeight: "bold",
    },
    logIn: {
        fontSize: '14px',
        fontFamily: 'Roboto',
        padding: '7px 44px',
        color: 'black',
        textDecoration: 'none',
        fontWeight: "bold",
    },
lockIcon:{
    height:'9.5px',
    width:'7.13px',
    marginRight:'8px'
}
}));

function NavBar(props) {
    const classes = useStyles();
    const [productDrop,setproductDrop]=useState('downIcon');
    const [solutionDrop,setsolutionDrop]=useState('downIcon');
    return (
        <nav className={classes.nav}>
            <Container fixed>
                <a href='!#' className={classes.BrandLogo}>
                    cridge
            </a>
                <ul className={classes.navMenu}>
                    <li className='h-nav-link '>
                        Products <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 ${productDrop}`}/>
                </li>
                    <li className='h-nav-link'>
                        Solutions <ExpandMoreIcon width={'7.66px'} height={'4.83px'} property={`ml-2 ${solutionDrop}`}/>
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
            </Container>

        </nav>
    );
}

export default NavBar;