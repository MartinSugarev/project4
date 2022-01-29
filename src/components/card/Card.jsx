import React, { useRef, useEffect } from 'react'
import styles from './Card.module.scss'
import { Card as C, Chip} from "@mui/material"
import Avatar from '../avatar/Avatar'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PropTypes from 'prop-types';
import millify from "millify";


export default function Card({name , likes = 0 ,mediaUrl, user , price , currency}){

    const el = useRef();
useEffect(() => {
  const n = Number(el.current.innerText)
  console.log(n)
   if(n % 1 === 0 ){
       console.log('not float')
   }else{
       el.current.classList.add('float')
       el.current.innerText = `~${n.toFixed(1)}`
   }
    ///

});

return <C className={styles.card}>
    <div className={styles.avatar}>
        <Avatar url='/images/avatar.png'/>
    </div>
       <img className={styles.media} src={mediaUrl} style={{objectFit: 'contain'}}/> 
    <div className={styles.container}>
       <div>
            <strong className={styles.name}>{name}</strong>
            <strong ref={el} className={styles.price} >{price}</strong>
            <strong className={styles.title}>{currency}</strong>
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
    price: PropTypes.string,
    currency: PropTypes.string
}