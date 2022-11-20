import styles from '../../styles/header/header.module.css'
import Link from 'next/link'

const Header = ({header}) =>{
    return(
        <div className={styles.header}>
            <h2>{header}</h2>
        </div>
    )
}

export default Header