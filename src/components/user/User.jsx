import styles from './User.module.scss'
import Avatar from '../avatar/Avatar'

export default function User({name = '', info = '', avatar = '', size = 55, verified = false}){

    console.log(styles.user);
    

return(
    <div className={styles.user}>
        <Avatar url='/images/avatar.png'/>
        <span className={styles.name}>{name}</span>
        <p className={styles.info}>{info}</p>
    </div>
)

}