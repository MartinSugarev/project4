import styles from './Avatar.module.scss'
import classNames from 'classnames'

const cl = classNames.bind(styles)


export default function Avatar({size, url, verified}){
 
return (
    <div className={cl('avatar')} style={{width: size + 'px', height: size + 'px', display: 'grid',
    position: 'relative',    
    borderStyle: 'dashed',
    borderRadius: '10px',
    borderColor: '#4e24f2',
    placeItems: 'center',
    borderWidth: '3px'}} >
        <img className={cl('image')}  src={url.default.src} style={{width: '100%', borderRadius: '50%'}}/>
       {verified === true ?  <img src="./image/verified.svg" className={cl('badge')} style={{
           position: 'absolute',
           bottom: '12%',
           left: '65%'
       }} />  : ''}
    </div>
)

}


Avatar.defaultProps = {
    size: 90,
    verified: false
}