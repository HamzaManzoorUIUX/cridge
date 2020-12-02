import React from 'react';
import NavBar from './NavBar';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Header from "./Header";
import FeatureOne from "./FeatureOne";
import Chatcomp from "./Chatcomp";
import FeatureTwo from "./FeatureTwo";
import BlogSection from "./BlogSection";


function Cridge(props) {
    return (
        <React.Fragment>
            <CssBaseline />
            <NavBar />
            <Container fixed>
               <Header/>
              <FeatureOne/>
            </Container>
            <Chatcomp/>
            <Container fixed>
            <FeatureTwo/>
            <BlogSection/>
            </Container>
        </React.Fragment>
    );
}

export default Cridge;