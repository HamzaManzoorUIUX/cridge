import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { chatImg } from './ComponetsImp'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F7FAFE',
        paddingTop: '34px',
        paddingBottom: '34px',
    },
    

    centerAlign: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column"
    }
}));

function Chatcomp(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container fixed>
                <Grid container className='sm-center'>
                    <Grid item md={6} sm={12} className={classes.centerAlign}>
                        <div>
                            <div className='c-details'>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                        </div>
                            <div className='c-tags'>
                                Maciej Malesa , CTO, GTChat
                        </div>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} >
                        <div className={`myImgRight chatImgDiv`}>
                            <img src={chatImg} alt="chatImg" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Chatcomp;