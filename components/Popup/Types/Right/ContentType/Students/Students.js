import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useClosePopup } from '../../../../Functions/close'
import popupStyles from '../../../../../../styles/popup/popup.module.css'


const Students = ({popup}) =>{

    const dispatch = useDispatch()
    const {closePopup} = useClosePopup()
    const router = useRouter()

    const {
        user_id,
        name,
        gender,
        phone,
        email,
        password
    } = popup.functions

    return(
        <div className={popupStyles.popupContent}>
            <div className={popupStyles.close} onClick={closePopup}>
                <svg id="cross" width="100%" height="100%" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><path fill="#666666" d="M7.678 6.88l5.657-5.656a1 1 0 1 1 1.414 1.414L9.092 8.295l5.657 5.657a1 1 0 1 1-1.414 1.414L7.678 9.709l-5.657 5.657a1 1 0 0 1-1.414-1.414l5.657-5.657L.607 2.638A1 1 0 1 1 2.02 1.224L7.678 6.88z"></path></svg>
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Ученик</p>
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Статус</p>
                <Select 
                    className={popupStyles.select}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>ФИО</p>
                <input 
                    className={popupStyles.input}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Email</p>
                <input 
                    className={popupStyles.input}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Пароль</p>
                <input 
                    className={popupStyles.input}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Телефон</p>
                <input 
                    className={popupStyles.input}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Пол</p>
                <Select 
                    className={popupStyles.select}
                />
            </div>
            <div className={popupStyles.buttons}>
                <button className={popupStyles.save}>Добавить</button>
            </div>
        </div>
    )
}

export default Students