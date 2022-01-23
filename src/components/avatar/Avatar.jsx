import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'
export default function Avatar({size = 90, url, verified = false}){


return <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src} alt="Avatar"/>
       <img className={styles.badge} src={badge.src} />
   </div>



}

 

