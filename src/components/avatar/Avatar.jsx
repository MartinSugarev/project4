import styles from './Avatar.module.scss'
import classNames from 'classnames'


export default function Avatar({size = 90, url, verified = false}){
 
return (
    <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src}/>
        <img src="/Users/macbookair/Desktop/project4/public/images/verified.svg" style={verified ? {} : {display: 'none'} } className={styles.badge}/> 
    </div>
)

}
