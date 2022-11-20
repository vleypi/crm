import rightStyles from '../../../../styles/popup/type/right.module.css'
import Statuses from './ContentType/Statuses/Statuses'

const Right = ({popup}) => {
    return (
        <div className={rightStyles.rightPopup}>
            {popup.contentType === 'statuses' && <Statuses popup={popup}/>}
        </div>
    )
}

export default Right