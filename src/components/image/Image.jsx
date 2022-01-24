import styles from './Image.module.scss'

export default function Image ({url}){


    return (
        <img className={styles.image} src={url} />
    )
    
}