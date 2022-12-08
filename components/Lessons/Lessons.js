import styles from '../../styles/lessons/lessons.module.css'
import LessonsList from './Lessons/LessonsList'
import {setPopupType} from '../../store/slices/popup'
import { useDispatch } from 'react-redux'

const Lessons = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={styles.lessons}>
            <LessonsList lessons={props.lessons} styles={styles} role={props.role}/>
        </div>
    )
}

export default Lessons