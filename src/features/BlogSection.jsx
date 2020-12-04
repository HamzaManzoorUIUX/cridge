import React from 'react';
import { Grid, makeStyles } from '@material-ui/core'
import Card from "../components/Card";
import Visiting from '../components/Visiting';

const useStyle = makeStyles((theme) => ({
    myHeadingOne: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '48px',
        marginBottom: 21,
        marginTop: 21,
        [theme.breakpoints.down('sm')]: {
            fontSize: 22,
            lineHeight: '27px'
        }
    },
    myParagraphOne: {
        fontSize: 20,
        color: 'black',
        textAlign:'center',
        [theme.breakpoints.down('sm')]: {
            fontSize: 14 
        }
    },
    visitDiv:{
          margin: '68px auto !important'
        }
}))

function BlogSection(props) {
    const classes = useStyle()
    return (
        <div>
            <h1 className={classes.myHeadingOne}>
                Operational system <br />
                    for Fast-growth B2B SaaS
                </h1>
            <p className={classes.myParagraphOne}>
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
            <Grid container spacing={3} className={classes.visitDiv}>
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