import React from 'react';
import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'
import cl from 'classnames'
import { Avatar as AV } from "@mui/material"



export default function Avatar({size = 90, url, verified = false}){
return (
    
   <div className={cl(styles.avatar)} style={{width: size + 'px', height: size + 'px'}} >
        <AV
 className={cl(styles.avatar)}
  alt="Remy Sharp"
  src={url.default.src}
  sx={{ width: '100%', height: '100%'}} />
       { verified ? <div className={cl(styles.badge)}> <img style={{width: '25px'}} src={badge.src} /></div>   : <div className={cl(styles.badge)}><img  src={badge.src} style={{display: 'none'}}/></div>  }
   </div>
);
};

 

