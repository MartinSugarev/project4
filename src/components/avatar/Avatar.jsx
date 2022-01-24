import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'





export default function Avatar({size = 90, url, verified = false}){
return (
    
   <div  style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src} alt="Image"/>
       { verified ? <div className={styles.badge}> <img style={{width: '25px'}} src={badge.src} /></div>   : <div className={styles.badge}> <img  src={badge.src} style={{display: 'none'}}/></div>  }
   </div>
);
};

 

