import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyle = makeStyles((theme) => ({
    myFooter: {
        minHeight: 285,
        display: 'flex',
        alignItems: 'center'
    },
    footerList: {
        listStyleType: 'none',
        margin: 0,
        paddingLeft: 0,
        '&>li': {
            marginTop: 5,
            marginBottom: 5,

        },
        '&>li>a': {
            color: 'black',
            fontSize: 18
        }
    },
    textRight: {
        fontSize: 18,
        textAlign: 'right',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center !important'
        }
    },
    footerGridRight: {
        [theme.breakpoints.down('md')]: {
            paddingLeft: '0 !important'
        }
    },
    footerGridLeft: {
        [theme.breakpoints.down('md')]: {
            paddingRight: '0 !important'
        }
    },

}))
function Footer(props) {
    const classes = useStyle()
    return (
        <footer className={classes.myFooter}>
            <Grid container spacing={3}>
                <Grid item xs={5} md={6} className={classes.footerGridLeft}>
                    <ul className={classes.footerList}>
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
                    </ul>
                    <ul className={classes.footerList}>
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
                    </ul>

                </Grid>
                <Grid item xs={7} md={6} className={classes.footerGridRight}>
                    <div className={classes.textRight}>
                        &copy; 2020 Templateondemand.co
         </div>
                </Grid>

            </Grid>
        </footer>
    );
}

export default Footer;