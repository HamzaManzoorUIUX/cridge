import React from 'react';
import Icon from '../assets/icons/chevron-down.svg';

function ExpandMoreIcon({width,height,property}) {
    return (
        <>
        <img src={Icon} width={width} height={height} className={property}/> 
        </>
    );
}

export default ExpandMoreIcon;