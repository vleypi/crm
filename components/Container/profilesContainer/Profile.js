import styles from '../../../styles/container/profileContainer/profile.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Profile = ({children,component}) =>{

    const router = useRouter()

    const links = [
        {text: 'Занятия',href: `/lessons`},
        {text: 'Адонементы', href: '/crm/dashboard/students'},
        {text: 'Расписание', href: '/crm/dashboard/teachers'},
        {text: 'Платежи', href: '/crm/dashboard/statuses'},
        {text: 'Посещения',href: '/crm/dashboard/lessons'}
    ].map((link)=>(
        <Link href={link.href} ><a className={router.pathname === link.href && styles.active}>{link.text}</a></Link>
    ))

    return(
        <div className={styles.profile}>
            <div className={styles.profileContent}>
                <div className={styles.info}>
                    <div>
                        <div className={styles.avatar}>{component.avatar}</div>
                        <div className={styles.mainInfo}>
                            <p className={styles.name}>{component.name}</p>
                            <p className={styles.addInfo}>{component.addInfo}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.nav}>
                    {links}
                </div>
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Profile