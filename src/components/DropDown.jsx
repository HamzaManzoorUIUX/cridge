import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core';


const usestyle = makeStyles((theme) => ({
    dropDown: {
        display: 'flex',
        position: 'absolute',
        height: 190,
        width: '100%',
        backgroundColor: '#F4F6F8',
        alignItems: 'center !important',
        top: 93,
        left: 0,
        right: 0,
        [theme.breakpoints.down('md')]: {
            position: 'relative',
            top: 0,
            height: '100%'
        }
    },
    dFlex: {
        display: 'flex',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    },
    singleItem: {
        maxWidth: 165,
        width: '100%',
        [theme.breakpoints.down('md')]: {
            marginTop:19
        }
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4717B3'
    },
    list: {
        listStyleType: 'none',
        fontSize: 12,
        padding: 0,
        '&>li': {
            marginTop: 15,
            marginBottom: 15,
            color: 'black'
        },
        '&>li>a': {
            textDecoration: 'none',
            color: 'black'
        }
    }
}))

function DropDownSol({ show }) {
    const classes = usestyle();
    return (<>
        {show === false ? <></> : <div className={classes.dropDown}>
            <Container fixed className={classes.dFlex}>
                <div className={classes.singleItem}>
                    <div className={classes.heading}>
                        Emailing sol
                  </div>
                    <ul className={classes.list}>
                        <li>
                            Transactional
                  </li>
                        <li>
                            Sales
                  </li>
                        <li>
                            Communication
                  </li>
                    </ul>
                </div>
                <div className={'singleItem'}>
                    <div className={'h-heading'}>
                        Marketing
                  </div>
                    <ul className={'list'}>
                        <li>
                            Automation
                  </li>
                        <li>
                            Sequences
                  </li>
                    </ul>
                </div>
                <div className={'singleItem'}>
                    <div className={'h-heading'}>
                        Scaling templates
                  </div>
                    <ul className={'list'}>
                        <li>
                            SaaS
                  </li>
                        <li>
                            Startup
                  </li>
                        <li>
                            Startup
                  </li>
                    </ul>
                </div>

            </Container>
        </div>
        }</>
    );
}

export default DropDownSol;