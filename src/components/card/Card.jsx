import styles from './Card.module.scss'
import { Card as C, Chip} from "@mui/material"
import Avatar from '../avatar/Avatar'
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import PropTypes from 'prop-types';
import millify from "millify";


export default function Card({name, likes = 0 ,mediaUrl, user, price = 111 , currency }){

//
return <C className={styles.card}>
    <div className={styles.avatar}>
        <Avatar url='/images/avatar.png'/>
    </div>
       <img className={styles.media} src={mediaUrl} style={{objectFit: 'contain'}}/> 
    <div className={styles.container}>
       <div >
           <p className={styles.title}>{currency}</p>
            <p className={styles.price} id="price">{'~' + price}</p>
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