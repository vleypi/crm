import styles from '../../styles/nav/nav.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Nav = ({role}) =>{
    console.log(role)
    const router = useRouter()

    const links = [
        {text: 'Расписание',href: '/crm/dashboard/schedule',role: ['Владелец','Педагог']},
        {text: 'Ученики', href: '/crm/dashboard/students',role: ['Владелец','Педагог']},
        {text: 'Педагоги', href: '/crm/dashboard/teachers',role: ['Владелец']},
        {text: 'Статусы', href: '/crm/dashboard/statuses',role: ['Владелец']},
        {text: 'Занятия',href: '/crm/dashboard/lessons',role: ['Владелец','Педагог']},
        {text: 'Блог',href: '/crm/dashboard/blog',role: ['Владелец']},
        {text: 'Связь',href: '/crm/dashboard/chats',role:['Владелец','Педагог']},
        {text: 'Профиль',href: '/crm/dashboard/profile',role:['Владелец','Педагог']},
    ].map((link)=>(
        link.role.find(l=>l == role) && <Link href={link.href} ><a className={router.pathname === link.href && styles.active}>{link.text}</a></Link>
    ))


    const profile = useSelector(({profile})=>profile)

    return(
        <nav className={styles.nav}>
            <div className={styles.toggleNav}>
                
            </div>
            <div className={styles.links}>
                {links}
            </div>
            {profile.name &&<div className={styles.account}>
                    <>
                        <div className={styles.avatar}>
                            {profile.avatar ? <img src={'http://localhost:5001' + profile.avatar} /> : profile.name[0]}
                        </div>
                        <div className={styles.accountInfo}>
                            <p className={styles.name}>{profile.name}</p>
                            <p className={styles.permissions}>{profile.role}</p>
                        </div>
                    </>
            </div>}
        </nav>
    )
}

export default Nav