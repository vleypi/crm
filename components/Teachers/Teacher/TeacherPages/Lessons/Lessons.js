import { useRouter } from 'next/router'
import styles from '../../../../../styles/profile/lessonsProfile.module.css'


const Lessons = ({teacher,lessons}) =>{
    const lesson_types = ['Групповые занятия','Индивидуальные занятия']
    
    const router = useRouter()

    const lessons_list = lessons.map((lesson)=>(
        <div className={styles.lesson} onClick={()=>router.push(`/crm/dashboard/lessons/${lesson.lesson_id}/participants`)}>
            <p className={styles.lesson_name}>{lesson.lesson_name}</p>
            <p className={styles.lesson_type}>{lesson_types[lesson.lesson_type-1]}</p>
            <div className={styles.amountStudents}>
                <svg id="people" width="100%" height="100%" viewBox="0 0 22 25" version="1.1" xmlns="http://www.w3.org/2000/svg"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g opacity=".3" transform="translate(6)"><path d="M3.904 2.131A5 5 0 1 1 10 9.584L10 9.5c0-.79-.122-1.551-.348-2.266A2.778 2.778 0 1 0 6.138 2.94a7.449 7.449 0 0 0-2.234-.809z" id="Combined-Shape" fill="currentColor"></path><path d="M1.067 20C.477 20 0 19.503 0 18.889 0 13.997 3.563 10 8 10c4.437 0 8 3.997 8 8.889 0 .409-.356.78-1.067 1.111H1.067z" id="Combined-Shape"></path><path d="M9.961 10.268c3.48.973 6.039 4.476 6.039 8.62 0 .615-.478 1.112-1.067 1.112s-1.066-.497-1.066-1.111c0-3.142-1.907-5.755-4.455-6.472a7.453 7.453 0 0 0 .55-2.149z" id="Combined-Shape" fill="currentColor"></path></g><g id="Learner-1" opacity=".303" transform="translate(0 5)"><path d="M8 10A5 5 0 1 1 8 0a5 5 0 0 1 0 10zm0-2.222a2.778 2.778 0 1 0 0-5.556 2.778 2.778 0 0 0 0 5.556z" id="Oval-2" fill="currentColor"></path><path d="M1.067 20C.477 20 0 19.503 0 18.889 0 13.997 3.563 10 8 10c4.437 0 8 3.997 8 8.889 0 .409-.356.78-1.067 1.111H1.067z" id="Combined-Shape"></path><path d="M2.214 17.778h8.453c1.178 0 2.133.995 2.133 2.222H1.067C.477 20 0 19.503 0 18.889 0 13.997 3.563 10 8 10c4.437 0 8 3.997 8 8.889 0 .614-.478 1.111-1.067 1.111s-1.066-.497-1.066-1.111c0-3.7-2.645-6.667-5.867-6.667-2.892 0-5.319 2.39-5.786 5.556z" id="Combined-Shape" fill="currentColor"></path></g></g></svg>
                <p>{lesson.students}</p>
            </div>  
        </div>
    ))
    
    return(
        <div className={styles.lessons}>
            {lessons_list}
        </div>
    )
}

export default Lessons