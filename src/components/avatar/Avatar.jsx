import styles from './Avatar.module.scss'
import classNames from 'classnames'


export default function Avatar({size = 90, url, verified = false}){
 
return (
    <div className={styles.avatar} style={{width: size + 'px' || '90px', height: size + 'px' || '90px'}} >
        <img className={styles.image}  src={url.default.src}/>
       {verified === true ?  <img src="/Users/macbookair/Desktop/project4/public/images/verified.svg" className={styles.badge}/> : ''}
    </div>
)

}
