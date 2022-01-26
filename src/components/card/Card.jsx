import styles from './Card.module.scss'
import { Card as C, Chip} from "@mui/material"
import Avatar from '../avatar/Avatar'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

export default function Card({name, likes ,mediaUrl, user, price, currency}){

//
return <C className={styles.card}>
    <div className={styles.avatar}>
        <Avatar />
    </div>
    <div className={styles.media}>
       <img src={mediaUrl} style={{objectFit: 'contain'}}/> 
    </div>
    <div className={styles.container}>
       <div >
           <strong className={styles.title}>{currency}</strong>
            <strong className={styles.price}>{price}</strong>
       </div>
       <div>
         <Chip className={styles.likes} icon={<FavoriteRoundedIcon />} label={likes} />
       </div>
    </div>

</C>

}