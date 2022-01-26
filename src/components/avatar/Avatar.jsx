import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'





export default function Avatar({size = 90, url = require('../../../public/images/avatar.png'), verified = false}){
return (
    <>
   <div className={styles.Avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.Image}  src={url.default.src} alt="Image"/>
       { verified ? <img className={styles.Aadge} src={badge.src} />   :  <img className={styles.Badge} src={badge.src}/> }
   </div>
   </>
);
};

 

