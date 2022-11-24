import styles from '../../../styles/students/student/student.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Student = ({children,student}) =>{

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
        <div className={styles.student}>
            <div className={styles.studentProfile}>
                <div className={styles.studentInfo}>
                    <div>
                        <div className={styles.student}>{student.name[0]}</div>
                        <div className={styles.mainInfo}>
                            <p className={styles.name}>{student.name}</p>
                            <p className={styles.addInfo}>{student.phone}</p>
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

export default Student