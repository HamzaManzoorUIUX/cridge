import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop:190,
    marginBottom:190,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
  },
  head:{
      borderTop:'1px solid #DAE2F2',
      borderLeft:'1px solid transparent',
      height:73,
      boxShadow:'none !important',
  },
  mainHeading:{
    fontSize:46,
    fontWeight:"bold",
    textAlign:'center',
  }
}));

export default function FAQs() {
  const classes = useStyles();
const sample=[1,2,3,4,5,6,7]
  return (
    <div className={classes.root}>
      <h1 className={classes.mainHeading}>
      Frequently Asked Questions
      </h1>
    {
        sample.map((i,index)=>{
            return <Accordion key={index}>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls={`panel1a-content${i}`}
              id={`panel1a-header${i}`}
              className={classes.head}
            >
              <Typography className={classes.heading}>Lorem ipsum dolor sit amet, consetetur </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        })
          
    }
    </div>
  );
}