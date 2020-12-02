import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@material-ui/core';

const useStyles=makeStyles(()=>({
    root:{
borderRadius:12,
backgroundColor:'rgba(71,23,179,0.1)',
    },
    heading:{
        fontSize:24,
        fontWeight:"bold",
        color:'#4717B3',
        marginBottom:19,
    },
    decrip:{
        fontSize:36,
        fontWeight:"bold",
        marginBottom:19,
        
    },
    subscribeInput:{
        maxWidth:460,
        height:40,
        width:'100%',
        border:'1px solid #4717B3',
        borderRadius:4,
        margin:'auto',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:4,
       backgroundColor:'white',
        '&>button':{
height:32,            
        },
        
    }
}))

function Subscrib(props) {
    const classes=useStyles();
    return (
        <div className={`subscribeDiv ${classes.root}`}>
            <div className={classes.heading}>
            14-day Free Trial for all paid features
            </div>
            <div className={classes.decrip}>
            Operational system for Fast-growth B2B SaaS
            </div>
            <div className={classes.subscribeInput}>
            <input type='email' className="inputSubscribe" placeholder="Enter your work email"/>
            <Button className='mainGradient' variant="contained" color="secondary">
                                    SignUp
                    </Button>
            </div>
        </div>
    );
}

export default Subscrib;