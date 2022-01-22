import styles from './Avatar.module.scss'
import classNames from 'classnames'

const cl = classNames.bind(styles)


export default function Avatar({size, url, verified}){
 
return (
    <div className={cl('avatar')} style={{width: size + 'px', height: size + 'px'}} >
        <img className={cl('image')}  src={url.default.src}/>
       {verified === true ?  <img src="./image/verified.svg" className={cl('badge')} />  : ''}
    </div>
)

}


Avatar.defaultProps = {
    size: 90,
    verified: false
}