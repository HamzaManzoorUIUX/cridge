import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles(()=>({
    Visiting:{
        display:'flex',
        borderRadius:6,
        backgroundColor:'#F7FAFE',
        padding:'33px 30px',
    },
    heading:{
        fontSize:30,
        fontWeight:'bold',
        marginTop:0,
        marginBottom:12,
    },
    image:{
width:68,
marginRight:24,
    },
    paragraph:{
        fontSize:20,
        marginTop:12,
    },
    link:{
        fontSize:20,
        color:'#4717B3',
        textDecoration:'underline',
    }
}))
function Visiting(props) {
    const classes=useStyles();
    return (
        <div className={classes.Visiting}>
            <img src={`/static/images/cards/${props.image}`} alt='visit' className={classes.image}/>
            <div>
                <h2 className={classes.heading}>
                {props.title}
                </h2>
                <p className={classes.paragraph}>
                {props.decrip}
                </p>
                <a href="!#" className={classes.link}>
                    {props.linkText}
                </a>
            </div>
        </div>
    );
}

export default Visiting;