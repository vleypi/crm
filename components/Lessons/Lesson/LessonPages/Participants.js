import { useRouter } from "next/router"

import styles from '../../../../styles/profile/participantsProfile.module.css'

const Participants = ({participants,lesson}) => {
    
    const router = useRouter()

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

    return(
        <div className={styles.participants}>
            <h3>Ученики <span>{participants_students_list.length}</span></h3>
            <div className={styles.participantsStudents}>
                {participants_students_list}
            </div>
            <h3>Педагоги <span>{participants_teachers_list.length}</span></h3>
            <div className={styles.participantsTeachers}>
                {participants_teachers_list}
            </div>
        </div>
    )
}

export default Participants
