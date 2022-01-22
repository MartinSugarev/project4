import styles from './Avatar.module.scss'




export default function Avatar({size, url, verified}){

console.log(verified);




return (
    <div className={styles.avatar} >
        <img className={styles.image} style={{width: size, height: size}} src={url.default.src}/>
       {verified === true ?  <img src="./image/verified.svg" className={styles.badge} />  : ''}
    </div>
)

}


Avatar.defaultProps = {
    size: '90px',
    verified: false
}