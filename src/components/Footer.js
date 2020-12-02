import { Grid } from '@material-ui/core';
import React from 'react';

function Footer(props) {
    return (
        <footer className="myFooter">
        <Grid container spacing={3}>
            <Grid item xs={6} md={6}>
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
            <Grid item xs={6} md={6}>
         <div className="text-md-right">
             &copy; 2020 Templateondemand.co
         </div>
            </Grid>
       
        </Grid>
        </footer>
    );
}

export default Footer;