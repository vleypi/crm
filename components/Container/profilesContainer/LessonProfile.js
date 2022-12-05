import styles from '../../../styles/container/profileContainer/profile.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { setPopupType } from '../../../store/slices/popup'

const Profile = (props) =>{

    const router = useRouter()
    const dispatch = useDispatch()

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
            </div>
            <div className={styles.profileContent}>
                {props.children}
            </div>
        </div>
    )
}

export default Profile