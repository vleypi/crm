import { useRouter } from 'next/router'
import Select from 'react-select'
import { setVisitStatus } from '../../../controllers/visitsController/setVisitStatus'

const Students = ({styles,participants,statuses_visits,visits_users,visit_id,role,lesson}) =>{

    const router = useRouter()



    const selectHandler = async (option,student) =>{
        router.query.lesson_id = lesson.lesson_id
        await setVisitStatus(option,student,visit_id,router.query)
        router.replace(router.asPath)
    }

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
                options={statuses_visits}
                onChange={(e)=>selectHandler(e,student)}
                value={
                    visits_users.find(visit=>visit.user_id == student.user_id) ?
                    statuses_visits.find(status=>status.status_id == visits_users.find(visit=>visit.user_id == student.user_id).status_id) :
                    null
                }
                isDisabled={role == 'Ученик'}
            />
        </div>
    ))



    return(
        <div className={styles.students}>
            {role !== 'Ученик' && <p className={styles.studentsTitle}>Ученики</p>}
            <div className={styles.studentsContainer}>
                {students}
            </div>

        </div>
    )
}

export default Students