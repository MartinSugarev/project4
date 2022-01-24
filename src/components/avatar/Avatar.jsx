import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'





export default function Avatar({size = 90, url, verified = false}){
return (
    
   <div className="avatar" style={{width: size + 'px', height: size + 'px'}} >
        <img className="image" style={{width: '100%', height: '100%', borderRadius: '50%'}}  src={url.default.src} alt="Image"/>
       { verified ? <div className="badge"> <img style={{width: '25px',position: 'absolute',
bottom: '0',
left: '65%',
width: '25px',
height: '25px'}} src={badge.src} /></div>   : <div className="badge"> <img   src={badge.src} style={{display: 'none'}}/></div>  }
   </div>
);
};

 

