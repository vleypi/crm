import rightStyles from '../../../../styles/popup/type/right.module.css'
import Lessons from './ContentType/Lessons/Lessons'
import Statuses from './ContentType/Statuses/Statuses'
import Students from './ContentType/Students/Students'
import Teachers from './ContentType/Teachers/Teacher'

const Right = ({popup}) => {
    return (
        <div className={rightStyles.rightPopup}>
            {popup.contentType === 'statuses' && <Statuses popup={popup}/>}
            {popup.contentType === 'lessons' && <Lessons popup={popup}/>}
            {popup.contentType === 'students' && <Students popup={popup} />}
            {popup.contentType === 'teachers' && <Teachers popup={popup} />}
        </div>
    )
}

export default Right