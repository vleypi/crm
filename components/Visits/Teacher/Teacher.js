import { useRouter } from 'next/router'
import Select from 'react-select'

const Teacher = ({styles,participants}) =>{

    const router = useRouter()

    const teachersFilter = participants.filter(student => student.role === 'Педагог')
    
    const teachers = teachersFilter.map((teacher)=>(
        <div className={styles.teachert} onClick={()=>router.push(`/crm/dashboard/teachers/${teacher.user_id}/lessons`)}>
            <div className={styles.teacherLink}>
                <div className={styles.avatar}>{teacher.name[0]}</div>
                <div>
                    <p>{teacher.name}</p>
                </div>
            </div>
        </div>
    ))

    return(
        <div className={styles.teachers}>
            <p className={styles.teachersTitle}>Педагоги</p>
            <div className={styles.teachersContainer}>
                {teachers}
            </div>
        </div>
    )
}

export default Teacher