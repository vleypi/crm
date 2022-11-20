import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPopupType } from '../../store/slices/popup'
import popupStyles from '../../styles/popup/popup.module.css'
import Right from './Types/Right/Right'

const Popup = () => {

    const popup = useSelector(({popup})=>popup)
    const dispatch = useDispatch()
    const popupRef = useRef()

    const clickHandler = (e) =>{

        console.log(2)
        if(e.target == popupRef.current){
            dispatch(setPopupType({type: '',content: {type: '',functions: {}}}))
        }
    }

    return (
        <>
            {popup.type &&
                <div className={popupStyles.popup} ref={popupRef} onClick={clickHandler}>
                    {popup.type === 'right' && <Right popup={popup} />}
                </div>
            }
        </>
    )
}

export default Popup