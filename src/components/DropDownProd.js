import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
const useStyle=makeStyles((theme)=>({
    dropDown:{
        display:'flex',
        position:"absolute",
        height:'190px',
        width:'100%',
        backgroundColor:'#F4F6F8',
        alignItems:'center !important',
        top:'93px',
        left:'0px',
        right:'0px',
        ['@media (max-width:991px)']: {
            position:"relative",
            top:'0px',
            height:'100%',
        },
        '&>.MuiContainer-root':{
            display:'flex',
            ['@media (max-width:991px)']: {
                flexDirection:"column",
                alignItems:'center',
            },
        },
    },
    singleItem:{
        maxWidth:'165px',
        width:'100%', 
        ['@media (max-width:991px)']: {
            marginTop:'19px',
        },
    },
    heading:{
        fontSize:'16px',
        fontFamily: 'Roboto',
        fontWeight:"bold",
        color:'#4717B3',
    },
    list:{
listStyleType:'none',
fontFamily:'Roboto',
fontSize:'12px',
padding:'0',
'&>li':{
    marginTop:'15px',
    marginBottom:'15px',
    color:'black',
    '&>a':{
        textDecoration:'none',
        color:'black',
    }
}
    },
}))
function DropDownProd({show}) {
    const classes=useStyle();
    return (<>
        {show===false?<></>:<div className={classes.dropDown}>
        <Container fixed>
        <div className={classes.singleItem}>
                  <div className={classes.heading}>
                      Emailing
                  </div>
                  <ul className={classes.list}>
                  <li>
                      Transactional
                  </li>
                  <li>
                  Sales
                  </li>
                  <li>
                  Communication
                  </li>
              </ul>
              </div>
              <div className={classes.singleItem}>
                  <div className={classes.heading}>
                  Marketing
                  </div>
                  <ul className={classes.list}>
                  <li>
                  Automation
                  </li>
                  <li>
                  Sequences
                  </li>
              </ul>
              </div>
              <div className={classes.singleItem}>
                  <div className={classes.heading}>
                  Scaling templates
                  </div>
                  <ul className={classes.list}>
                  <li>
                  SaaS
                  </li>
                  <li>
                  Startup
                  </li>
                  <li>
                  Startup
                  </li>
              </ul>
              </div>
        
        </Container>
          </div>
     }</>
    );
}

export default DropDownProd;