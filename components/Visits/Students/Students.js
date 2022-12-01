import { useRouter } from 'next/router'
import Select from 'react-select'

const Students = ({styles,participants}) =>{

    const router = useRouter()

    const studentsFilter = participants.filter(student => student.role === 'Ученик')
    
    const students = studentsFilter.map((student)=>(
        <div className={styles.student}>
            <div className={styles.studentLink} onClick={()=>router.push(`/crm/dashboard/students/${student.user_id}/lessons`)}>
                <div className={styles.avatar}>{student.name[0]}</div>
                <div>
                    <p>{student.name}</p>
                </div>
            </div>
            <Select     
                className={styles.select}
                placeholder={'Отметить'}
            />
        </div>
    ))

    return(
        <div className={styles.students}>
            <p className={styles.studentsTitle}>Ученики</p>
            <div className={styles.studentsContainer}>
                {students}
            </div>

        </div>
    )
}

export default Students