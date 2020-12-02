import { Grid } from '@material-ui/core';
import React from 'react';

function Footer(props) {
    return (
        <footer className="myFooter">
        <Grid container spacing={3}>
            <Grid item md={4} lg={3} sm={12}>
            <ul className='footerList'>
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
            <Grid item md={4} lg={3} sm={12}>
            <ul  className='footerList'>
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
            <Grid item md={4} lg={6} sm={12}>
         <div className="text-md-right">
             &copy; 2020
         </div>
            </Grid>
       
        </Grid>
        </footer>
    );
}

export default Footer;