import styles from '../../styles/header/header.module.css'
import Link from 'next/link'
import Tools from './Tools/Tools'

const Header = ({header}) =>{
    return(
        <div className={styles.header}>
            <h2>{header}</h2>
            <Tools />
        </div>
    )
}

export default Header