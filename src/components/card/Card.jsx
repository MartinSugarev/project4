import React, { useRef, useEffect } from 'react'
import styles from './Card.module.scss'
import { Card as C, Chip} from "@mui/material"
import Avatar from '../avatar/Avatar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';
import millify from "millify";
import Countdown from '../countdown/Countdown'
import CircleIcon from '@mui/icons-material/Circle';


export default function Card({name , likes = 0 ,mediaUrl, user, price, currency, timeLeft }){

    const el = useRef();
useEffect(() => {
  const c = currency.toUpperCase()
  const n = Number(el.current.innerText)
   if(n % 1 === 0 ){
    el.current.innerText = `${n} ${currency}`
   }else{
       el.current.classList.add('float')
       el.current.innerText = `~${n.toFixed(1)} ${c}`
   }
});

return <C className={styles.card}>
    <div className={styles.avatar}>
        <Avatar url={user.avatar.url} verified={user.verified}/>
    </div>
           {timeLeft ? <div className={styles.badge} > <CircleIcon  fontSize="inherit" /> <span>LIVE</span></div> : <div className={styles.badge} style={{display: "none"}} > <CircleIcon  fontSize="inherit" /> <span>LIVE</span></div>}
           {timeLeft ?   <Countdown timeLeft /> : <Countdown style={{display: "none"}} timeLeft />} 
          <img className={styles.media} src={mediaUrl} style={{objectFit: 'contain'}}/>
    <div className={styles.container}>
       <div>
            <strong className={styles.title}>{name}</strong>
            <strong ref={el} className={styles.price} >{price}</strong>
       </div>
       <div>
         <Chip className={styles.likes} color="secondary" icon={<FavoriteBorderIcon />} label={millify(likes)} />
       </div>
    </div>

</C>

}

Card.propTypes = {
    name: PropTypes.string,
    likes: PropTypes.number,
    mediaUrl: PropTypes.string,
    user:{
        avatarUrl: PropTypes.string,
        verified: PropTypes.boolean
    },
    price: PropTypes.string,
    currency: PropTypes.string,
    timeLeft: PropTypes.number
}