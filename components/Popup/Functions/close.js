import {useDispatch} from 'react-redux'
import { setPopupType } from '../../../store/slices/popup'

export const useClosePopup = () =>{
    const dispatch = useDispatch()

    const closePopup = () =>{
        dispatch(setPopupType({
            type: '',
            contentType: '',
            functions: {}
        }))
    }
    
    return {closePopup}
}