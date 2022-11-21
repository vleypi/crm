import popupStyles from '../../../../../../styles/popup/popup.module.css'
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useClosePopup } from '../../../../Functions/close';
import { useState } from 'react';
import { setStatus } from '../../../../../../controllers/statusesController/setStatus';
import { deleteStatus } from '../../../../../../controllers/statusesController/deleteStatus';
import { useRouter } from 'next/router';
import { setPopupType } from '../../../../../../store/slices/popup';

const colourOptions = [
    { value: 'Красный', label: 'Красный', color: '#f44336' },
    { value: 'Розовый', label: 'Розовый', color: '#e91e63' },
    { value: 'Фиолетовый', label: 'Фиолетовый', color: '#9c27b0' },
    { value: 'Темно-фиолетовый', label: 'Темно-фиолетовый', color: '#673ab7' },
    { value: 'Циан', label: 'Циан', color: '#00bcd4' },
    { value: 'Светло-синий', label: 'Светло-синий', color: '#03a9f4' },
    { value: 'Синий', label: 'Синий', color: '#2196f3' },
    { value: 'Индиго', label: 'Индиго', color: '#3f51b5' },
    { value: 'Лайм', label: 'Лайм', color: '#cddc39' },
    { value: 'Светло-зеленый', label: 'Светло-зеленый', color: '#8bc34a' },
    { value: 'Зеленый', label: 'Зеленый', color: '#4caf50' },
    { value: 'Бирюзовый', label: 'Бирюзовый', color: '#009688' },
    { value: 'Желтый', label: 'Желтый', color: '#ffeb3b' },
    { value: 'Янтарь', label: 'Янтарь', color: '#ffc107' },
    { value: 'Оранжевый', label: 'Оранжевый', color: '#ff9800' },
    { value: 'Темно-оранжевый', label: 'Темно-оранжевый', color: '#ff5722' }
];

const colorStyles = {
    control: styles => ({
         ...styles, 
        backgroundColor: 'white',
        border: '1px rgb(218, 218, 218) solid',
        height: '30px'
    }),
    option: styles => ({
        ...styles,

    })
}


const Statuses = ({popup}) => {

    const dispatch = useDispatch()
    const {closePopup} = useClosePopup() 
    const router = useRouter()

    const {
        status_pay,
        status_visited,
        status_withdraw,
        status_name='',
        status_id='',
        status_color='#f44336'
    } = popup.functions


    const [functions,setFunctions] = useState({
        status_pay,
        status_visited,
        status_withdraw,
        status_name,
        status_id,
        status_color: colourOptions[colourOptions.findIndex(color=>color.color === status_color)],
        checkboxes: [
            {text: 'Списывать занятия из абонемента',type: 'status_withdraw'},
            {text: 'Оплачивать занятия педагогу',type: 'status_pay'},
            {text: 'Ученик посетил занятие',type: 'status_visited'}
        ]
    })


    const checkboxesDiv = functions.checkboxes.map((checkbox,index)=>(
        <div className={popupStyles.checkboxContainer} onClick={()=>checkboxHandler(checkbox.type)}>
            <div className={`${popupStyles.checkbox} ${functions[checkbox.type] && popupStyles.checked}` }></div>
            <p>{checkbox.text}</p>
        </div>
    ))

    const checkboxHandler = (type) =>{
        const check = {...functions}
        check[type] = check[type] ? 0 : 1
        setFunctions(check)
    }

    const inputHandler = (e) =>{
        setFunctions({...functions,[e.target.name]: e.target.value})
    }

    const selectHandler = (e) =>{
        setFunctions({...functions,status_color: e})
    }

    const setStatuses = async () =>{
        await setStatus(functions)
        dispatch(setPopupType({type: ''}))
        router.replace(router.asPath)
    }

    const deleteStatuses = async () =>{
        await deleteStatus(functions)
        dispatch(setPopupType({type: ''}))
        router.replace(router.asPath)
    }

    return (
        <div className={popupStyles.popupContent}> 
            <div className={popupStyles.close} onClick={closePopup}>
                <svg id="cross" width="100%" height="100%" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><path fill="#666666" d="M7.678 6.88l5.657-5.656a1 1 0 1 1 1.414 1.414L9.092 8.295l5.657 5.657a1 1 0 1 1-1.414 1.414L7.678 9.709l-5.657 5.657a1 1 0 0 1-1.414-1.414l5.657-5.657L.607 2.638A1 1 0 1 1 2.02 1.224L7.678 6.88z"></path></svg>
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Название</p>
                <input 
                    className={popupStyles.input} 
                    value={functions.status_name}
                    onChange={inputHandler}
                    name="status_name"
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Цвет</p>
                <Select 
                    options={colourOptions}
                    placeholder={colourOptions[0]}
                    className={popupStyles.select}
                    styles={colorStyles}
                    value={functions.status_color}
                    onChange={selectHandler}
                />
            </div>
            <div className={popupStyles.checkboxes}>
                {checkboxesDiv}
            </div>
            <div className={popupStyles.buttons}>
                <button className={popupStyles.save} onClick={setStatuses}>{status_id ? 'Сохранить' : 'Добавить'}</button>
                {status_id && <button className={popupStyles.delete} onClick={deleteStatuses}>Удалить</button>}
            </div>
        </div>
    )
}

export default Statuses