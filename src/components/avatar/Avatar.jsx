import styles from './Avatar.module.scss'




export default function Avatar(props){

return (
    <div className={styles.avatar} style={{width: props.size + 'px', height: props.size + 'px'}} >
        <img className={styles.image}  src={props.url.default.src}/>
       {props.verified === true ?  <img src="./image/verified.svg" className={styles.badge} />  : ''}
    </div>
)

}


Avatar.defaultProps = {
    size: 90,
    verified: false
}