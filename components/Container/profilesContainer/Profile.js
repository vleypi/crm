import styles from '../../../styles/container/profileContainer/profile.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setPopupType } from '../../../store/slices/popup'

const Profile = (props) =>{

    const router = useRouter()
    const dispatch = useDispatch()

    console.log(router)

    const links = [
        {text: 'Занятия',href: `/crm/dashboard/${props.page}/${props.user.user_id}/lessons`},
        {text: 'Расписание', href:  `/crm/dashboard/${props.page}/${props.user.user_id}/schedule`},
    ].map((link)=>(
        <Link href={link.href} ><a className={router.asPath === link.href && styles.active}>{link.text}</a></Link>
    ))

    console.log(props.student)

    const setPopup = () =>{
        dispatch(setPopupType({
            type: 'right',
            contentType: props.component.popup_type,
            functions: props.component.functions
        }))
    }

    return(
        <div className={styles.profile}>
            <div className={styles.profileHeader}>
                <div className={styles.info}>
                        <div className={styles.avatar}>{props.component.avatar}</div>
                        <div className={styles.mainInfo}>
                            <div style={{display: 'flex'}}>
                                <p className={styles.name}>{props.component.name}</p>
                                <span className={styles.getInfo} onClick={setPopup}>i</span>
                            </div>
                            <p className={styles.addInfo}>{props.component.addInfo}</p>
                        </div>
                </div>
                <div className={styles.nav}>
                    {links}
                </div>
            </div>
            <div className={styles.profileContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Profile