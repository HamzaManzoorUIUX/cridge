import React from 'react';
import { Grid } from '@material-ui/core'
import Card from "./Card";
import Visiting from './Visiting';

function BlogSection(props) {
    return (
        <div>
            <h1 className='myHeadingOne text-center'>
                Operational system <br />
                    for Fast-growth B2B SaaS
                </h1>
            <p className='myParagraphOne text-center'>
                Lorem ipsum dolor sit amet, consetetur<br />
                    sadipscing elitr, sed diam nonumy eirmod tempor
                </p>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={12} md={4}>
                    <Card image={'3.jpg'} title={'sample Image'} header={`10 awesome see skills to
master in 2021`} />
                </Grid>
                <Grid item xs={12} md={4} sm={12}>
                    <Card image={'2.jpg'} title={'sample Image'} header={`10 awesome see skills to
master in 2021`} />
                </Grid>
                <Grid item xs={12} md={4} sm={12} >
                    <Card image={'1.jpg'} title={'sample Image'} header={`10 awesome see skills to
master in 2021`} />
                </Grid>
            </Grid>
            <Grid container spacing={3} className='visitDiv'>
                <Grid item md={6} sm={12}>
                    <Visiting linkText='Visit help Center' decrip='Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy' title='Visit our help center' image='visit.svg' />
                </Grid>
                <Grid item md={6} sm={12}>
                    <Visiting linkText='Join our community' decrip='Lorem ipsum dolor sit amet, consetetur 
sadipscing elitr, sed diam nonumy' title='Explore community' image='join.svg' />
                </Grid>
            </Grid>
        </div>
    );
}

export default BlogSection;