import styles from './Avatar.module.scss'




export default function Avatar({size, url, verified}){




return (
    <div className={styles.avatar} style={{width: size, height: size}}>
        <img className={styles.image} src={url.default.src}/>
       {verified === true ?  <img src="./image/verified.svg" className={styles.badge} />  : ''}
    </div>
)

}


Avatar.defaultProps = {
    size: '90px',
    verified: false
}