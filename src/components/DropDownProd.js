import React from 'react';
import Container from '@material-ui/core/Container';
import './dropdown.css';

function DropDownProd({show}) {

    return (<>
        {show===false?<></>:<div className={'h-dropDown'}>
        <Container fixed>
        <div className={'singleItem'}>
                  <div className={'h-heading'}>
                      Emailing
                  </div>
                  <ul className={'list'}>
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
              <div className={'singleItem'}>
                  <div className={'h-heading'}>
                  Marketing
                  </div>
                  <ul className={'list'}>
                  <li>
                  Automation
                  </li>
                  <li>
                  Sequences
                  </li>
              </ul>
              </div>
              <div className={'singleItem'}>
                  <div className={'h-heading'}>
                  Scaling templates
                  </div>
                  <ul className={'list'}>
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