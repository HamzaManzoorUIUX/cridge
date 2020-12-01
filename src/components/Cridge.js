import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import NavBar from './NavBar';

function Cridge(props) {
    return (
        <React.Fragment>
        <CssBaseline />
        <NavBar/>
        <Container fixed>
          
        </Container>
      </React.Fragment>
    );
}

export default Cridge;