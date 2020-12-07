import React from 'react';
import NavBar from './NavBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from "@material-ui/core";
import Header from "./Header";
import FeatureOne from "./FeatureOne";
import Chatcomp from "./Chatcomp";
import FeatureTwo from "./FeatureTwo";
import BlogSection from "./BlogSection";
import FAQs from './FAQs';
import Subscrib from './Subscrib';
import Footer from './Footer';
const useStyles=makeStyles((theme)=>({
root:{
    [theme.breakpoints.up('md')]: {
        maxWidth: '1140px',
        padding: '0px'
      
    },

}
}))

function Cridge(props) {
    const classes=useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Container fixed className={classes.root}>
               <Header/>
              <FeatureOne/>
            </Container>
            <Chatcomp/>
            <Container fixed>
            <FeatureTwo/>
            <BlogSection/>
            <FAQs/>
            <Subscrib/>
            <Footer/>
            </Container>
        </React.Fragment>
    );
}

export default Cridge;