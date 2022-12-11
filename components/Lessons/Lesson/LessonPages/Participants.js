import { useRouter } from "next/router"
import { useDispatch } from "react-redux"
import { setPopupType } from "../../../../store/slices/popup"

import styles from '../../../../styles/profile/participantsProfile.module.css'

const Participants = ({participants,lesson,role}) => {
    
    const router = useRouter()

    const dispatch = useDispatch()

    const participants_students_list = participants.filter(p=>p.role === 'Ученик').map((participant)=>(
        <div className={styles.participant} onClick={()=>router.push(`/crm/dashboard/students/${participant.user_id}/lessons`)}>
            <div className={styles.participant_avatar}>{participant.name[0]}</div>
            <p className={styles.participant_name}>{participant.name}</p>
            <p className={styles.addInfo}>{participant.phone}</p>
        </div>
    ))

    const participants_teachers_list = participants.filter(p=>p.role === 'Педагог').map((participant)=>(
        <div className={styles.participant} onClick={()=>router.push(`/crm/dashboard/teachers/${participant.user_id}/lessons`)}>
            <div className={styles.participant_avatar}>{participant.name[0]}</div>
            <p className={styles.participant_name}>{participant.name}</p>
            <p className={styles.addInfo}>{participant.phone}</p>
        </div>
    ))

    const setPopup = () =>{

        dispatch(setPopupType({
            type: 'right',
            contentType: "lessons",
            functions: lesson
        }))
    }


    const addParticipants = <div className={styles.participant} style={{border: 'dashed 1px gray',background: 'none'}} onClick={setPopup}>
            <div style={{color: '#2c2b7c',fontSize: '48px',fontWeight: 3000}}>+</div>
            <p className={styles.addInfo}>Добавить участника</p>
        </div>
    

   
    
    return(
        <div className={styles.participants}>
            <h3>Ученики <span>{participants_students_list.length}</span></h3>
            <div className={styles.participantsStudents}>
                {participants_students_list}
                {/* {addParticipants} */}
            </div>
            <h3>Педагоги <span>{participants_teachers_list.length}</span></h3>
            <div className={styles.participantsTeachers}>
                {participants_teachers_list}
                {/* {addParticipants} */}
            </div>
        </div>
    )
}

export default Participants
