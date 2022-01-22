import styles from './Avatar.module.scss'




export default function Avatar({size, url, verified}){




return (
    <div className={styles.avatar} style={{width: `${size.width}`, height: `${size.height}`}}>
        <img className={styles.image} src={url.default.src}/>
        <img src="./image/verified.svg" className={styles.badge} />
    </div>
)

}


Avatar.defaultProps = {
    size: {width: '90px', height: '90px'},
    verified: false
}