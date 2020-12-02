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
    details: {
        maxWidth: '512px',
        width: '100%',
        fontSize: '28px',
        fontWeight: "bold",
        lineHeight: '44px',
    },
    tags: {
        marginTop: '34px',
        fontWeight: "bold",
        fontSize: '19px',
        color: '#4717B3',
    },
    chatImgDiv: {
        
        '&>img': {
            maxWidth: '383px',
            width: '100%',

        }
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
                <Grid container>
                    <Grid item md={6} sm={12} className={classes.centerAlign}>
                        <div>
                            <div className={classes.details}>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                        </div>
                            <div className={classes.tags}>
                                Maciej Malesa , CTO, GTChat
                        </div>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <div className={`myImgRight ${classes.chatImgDiv}`}>
                            <img src={chatImg} alt="chatImg" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Chatcomp;