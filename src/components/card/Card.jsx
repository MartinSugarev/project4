import styles from './Card.module.scss'
import { Card as C, Chip} from "@mui/material"
import Avatar from '../avatar/Avatar'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PropTypes from 'prop-types';
import millify from "millify";


export default function Card({name, likes = 0 ,mediaUrl, user, price, currency}){

//
return <C className={styles.card}>
    <div className={styles.avatar}>
        <Avatar url='/images/avatar.png'/>
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
         <Chip className={styles.likes} color="secondary" icon={<FavoriteRoundedIcon />} label={millify(likes)} />
       </div>
    </div>

</C>

}

Card.PropTypes = {
    name: PropTypes.string,
    likes: PropTypes.number,
    mediaUrl: PropTypes.string,
    user: {
        avatar: {
            url: PropTypes.string
        },
        verified: PropTypes.boolean
    },
    price: PropTypes.string,
    currency: PropTypes.string
}