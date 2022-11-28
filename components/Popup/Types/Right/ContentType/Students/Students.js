import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { useClosePopup } from '../../../../Functions/close'
import popupStyles from '../../../../../../styles/popup/popup.module.css'
import { setUser } from '../../../../../../controllers/authController/authController'
import { setPopupType } from '../../../../../../store/slices/popup'


const Students = ({popup}) =>{

    const dispatch = useDispatch()
    const {closePopup} = useClosePopup()
    const router = useRouter()

    const {
        user_id='',
        name='',
        gender='',
        phone='',
        email='',
        password='',
        genders=[{value: 'Мужской',label: 'Мужской'},{value: 'Женский', label: 'Женский'}],
        statuses=[{value: 1,label: "Активный"},{value: 2,label: "В архиве"}]
    } = popup.functions

    const [functions,setFunctions] = useState({
        user_id,
        name,
        status: 1,
        gender,
        phone,
        email,
        password,
        role: "Ученик"
    })

    const inputHandler = (e) =>{
        setFunctions({...functions,[e.target.name]: e.target.value})
    }

    const selectHandler = (e,select) =>{
        setFunctions({...functions,[select]: e.value})
    }

    const setUsers = async () =>{
        await setUser(functions)
        dispatch(setPopupType({type: ''}))
        router.replace(router.asPath)
    }

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
                    placeholder={statuses[functions.status - 1]}
                    value={statuses[functions.status - 1]}
                    options={statuses}
                    onChange={(e)=>selectHandler(e,'status')}
                    noOptionsMessage={() => 'Нет вариантов'}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>ФИО</p>
                <input 
                    name='name'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.name}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Email</p>
                <input 
                    name='email'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.email}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Пароль</p>
                <input 
                    name='password'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.password}
                    type="password"
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Телефон</p>
                <input 
                    name='phone'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.phone}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Пол</p>
                <Select 
                    className={popupStyles.select}
                    placeholder={functions.gender}
                    options={genders}
                    onChange={(e)=>selectHandler(e,'gender')}
                    noOptionsMessage={() => 'Нет вариантов'}
                />
            </div>
            <div className={popupStyles.buttons}>
                <button className={popupStyles.save} onClick={setUsers}>Добавить</button>
            </div>
        </div>
    )
}

export default Students