import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles=makeStyles(()=>({
    Visiting:{
        display:'flex',
        borderRadius:6,
        backgroundColor:'#F7FAFE',
        padding:'33px 30px',
    }
}))
function Visiting(props) {
    const classes=useStyles();
    return (
        <div className={classes.Visiting}>
            Hamza
        </div>
    );
}

export default Visiting;