import styles from './Avatar.module.scss'
import classNames from 'classnames'
import PropTypes from 'prop-types'

export default function Avatar({size = 90, url = require('../../../public/images/avatar.png'), verified = false}){
 
return (
    <div className={styles.avatar} style={{width: size + 'px', height: size + 'px'}} >
        <img className={styles.image}  src={url.default.src} alt="Avatar"/>
        <div className={styles.badge}>
         { verified ?  <svg width="25" height="25" viewBox="0 0 58 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M55.7398 28.1728L56.3516 27.5L55.7398 26.8272L50.1552 20.6858L51.0294 12.4658L51.125 11.5669L50.2403 11.3813L42.0682 9.66771L37.901 2.49752L37.4509 1.72295L36.6317 2.08558L29.0001 5.46381L21.3684 2.08558L20.5492 1.72295L20.0991 2.49752L15.9319 9.66771L7.75982 11.3813L6.87507 11.5669L6.97066 12.4658L7.84478 20.6858L2.26015 26.8272L1.64838 27.5L2.26015 28.1728L7.84468 34.3142L6.97056 42.5342L6.87497 43.4331L7.75972 43.6187L15.9318 45.3323L20.099 52.5025L20.5491 53.2771L21.3683 52.9144L28.9999 49.5361L36.6316 52.9144L37.4508 53.2771L37.9009 52.5025L42.0681 45.3323L50.2402 43.6187L51.1249 43.4331L51.0293 42.5342L50.1551 34.3142L55.7398 28.1728ZM38.4812 21.9417L26.8078 34.8957L19.2009 27.3611L19.9369 26.6321L26.0192 32.6564L26.764 33.3942L27.4657 32.6154L37.7037 21.2544L38.4812 21.9417Z" fill="#24F25E" stroke="#181828" stroke-width="2"/>
</svg> : " " } </div> 

    </div>
)

}

Avatar.propTypes = {
    size: PropTypes.number,
    verified: PropTypes.boolean
}