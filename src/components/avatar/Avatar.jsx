import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'
import cl from 'classnames'




export default function Avatar({size = 90, url, verified = false}){
return (
    
   <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={cl(styles.image)}  src={url.default.src} alt="Image"/>
       { verified ? <div className={cl(styles.badge)}> <img style={{width: '25px'}} src={badge.src} /></div>   : <div className={cl(styles.badge)}> <img  src={badge.src} style={{display: 'none'}}/></div>  }
   </div>
);
};

 

