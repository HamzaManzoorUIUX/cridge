import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { chatImg } from '../components/ComponetsImp'
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#F7FAFE',
        paddingTop: '34px',
        paddingBottom: '34px',
    },
    center: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },

    centerAlign: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: "column"
    },
    details: {
        maxWidth: 512,
        width: '100%',
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: '44px',
        [theme.breakpoints.down('md')]: {
            fontSize: 22,
            textAlign: 'center'
        }
    },
    tags: {
        margintop: 34,
        fontweight: 'bold',
        fontsize: 19,
        color: '#4717B3',
        [theme.breakpoints.down('md')]: {
            textAlign:'center'
          
        },
    },
    chatImgDiv: {
        width: '100%',
        '&>img': {
            maxWidth: 383,
            width: '100%',
            [theme.breakpoints.down('md')]: {
                maxWidth:83,
              margintop:5
            },
        }
    }
}));

function Chatcomp(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container fixed>
                <Grid container className={classes.center}>
                    <Grid item md={6} sm={12} className={classes.centerAlign}>
                        <div>
                            <div className={classes.details}>
                                Lorem ipsum dolor sit amet, consetetur
                                sadipscing elitr, sed diam nonumy eirmod tempor
                        </div>
                            <div className={classes.tags}>
                                Lorem Ipsum, CTO, Lorem
                        </div>
                        </div>
                    </Grid>
                    <Grid item md={6} sm={12} >
                        <div className={classes.chatImgDiv}>
                            <img src={chatImg} alt="chatImg" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default Chatcomp;