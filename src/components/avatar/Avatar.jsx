import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'





export default function Avatar({size = 90, url, verified = false}){
return (
   <div className={styles.wrapper}>
      <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >  
   </div>
   <img className="image"  src={url.default.src} alt="Avatar"/>
   { verified ? <div className={styles.badge}> <img style={{width: '25px'}} src={badge.src} /></div>   : <div className={styles.badge}><img  src={badge.src} style={{display: 'none'}}/></div>  }
   </div> 
   
);
};

 

