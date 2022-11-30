import styles from '../../styles/nav/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Nav = () =>{

    const router = useRouter()

    const links = [
        {text: 'Расписание',href: '/crm/dashboard/schedule'},
        {text: 'Ученики', href: '/crm/dashboard/students'},
        {text: 'Педагоги', href: '/crm/dashboard/teachers'},
        {text: 'Статусы', href: '/crm/dashboard/statuses'},
        {text: 'Занятия',href: '/crm/dashboard/lessons'},
        {text: 'Блог',href: '/crm/dashboard/blog'}
    ].map((link)=>(
        <Link href={link.href} ><a className={router.pathname === link.href && styles.active}>{link.text}</a></Link>
    ))


    const profile = useSelector(({profile})=>profile)

    return(
        <nav className={styles.nav}>
            <div className={styles.toggleNav}>
                
            </div>
            <div className={styles.links}>
                {links}
            </div>
            <div className={styles.account}>
                {profile.name &&
                    <>
                        <div className={styles.avatar}>
                            {profile.name[0]}
                        </div>
                        <div className={styles.accountInfo}>
                            <p className={styles.name}>{profile.name}</p>
                            <p className={styles.permissions}>{profile.role}</p>
                        </div>
                    </>
                }
            </div>
        </nav>
    )
}

export default Nav