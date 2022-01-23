import styles from './Avatar.module.scss'
import badge from  '../../../public/images/verified.svg'
export default function Avatar({size = 90, url, verified = false}){


return (
    <>
    <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src} alt="Avatar"/>
        <span className={styles.badge}>
          <img src={badge.src} style={{width: '25px', height: '25px'}}/>
        </span>
    </div>
    </>
)

}

 

