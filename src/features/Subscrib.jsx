import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 12,
        backgroundColor: 'rgba(71,23,179,0.1)',
        padding: 96,
        textAlign: 'center',
        [theme.breakpoints.down('md')]: {
            padding: '16px 5px'
        }
    },
    heading: {
        fontSize: 24,
        fontWeight: "bold",
        color: '#4717B3',
        marginBottom: 19,
        [theme.breakpoints.down('sm')]: {
            fontSize: 10
        }
    },
    decrip: {
        fontSize: 36,
        fontWeight: "bold",
        marginBottom: 19,
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        }
    },
    subscribeInput: {
        [theme.breakpoints.up('md')]: {
            width: '100%',
            border: '1px solid #4717B3',
            height: 40,
            margin: 'auto',
            display: 'flex',
            flexDirection: 'row',
            maxWidth: 460,
            alignItems: 'center',
            borderRadius: 4,
            paddingRight: 4,
            justifyContent: 'space-between',
            backgroundColor: 'white'
        },
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
            width: '100%',
            margin: 'auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            borderRadius: 4,
            paddingRight: 4,
            justifyContent: 'space-between'
        }

    },
    button: {
        background: 'linear-gradient(#6B33D6, #4213AE)',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        }
    },
    input: {

        [theme.breakpoints.down('md')]: {
            '&:focus,&:active': {
                border: 'none',
                outline: 'none',
                boxShadow: 'none'
            }
        },
        [theme.breakpoints.up('md')]: {
            width: '100%',
            border: 'none',
            paddingLeft: 16
        },
        height: 40,
        borderRadius: 4,
        border: '1px solid #4717B3',
        paddingLeft: '16px',
        width: '100%',
        marginBottom: 8,
    }
}))

function Subscrib(props) {
    const classes = useStyles();
    return (
        <div className={`${classes.root}`}>
            <div className={classes.heading}>
                14-day Free Trial for all paid features
            </div>
            <div className={classes.decrip}>
                Operational system for Fast-growth B2B SaaS
            </div>
            <div className={classes.subscribeInput}>
                <input type='email' className={classes.input} placeholder="Enter your work email" />
                <Button className={classes.button} variant="contained" color="secondary">
                    SignUp
                    </Button>
            </div>
        </div>
    );
}

export default Subscrib;