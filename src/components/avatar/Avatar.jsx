import styles from './Avatar.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'
const badge = require('../../../public/images/verified.svg')

export default function Avatar({size = 90, url = require('../../../public/images/avatar.png'), verified = false}){
 console.log(badge)
return (
    <>
    <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src} alt="Avatar"/>
        <img className={styles.badge}  src={badge.default.src} alt="Badge"  />
    </div>
    <div className="badge"></div>
    </>
)

}

