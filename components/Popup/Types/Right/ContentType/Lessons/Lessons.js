import popupStyles from '../../../../../../styles/popup/popup.module.css'
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import { useClosePopup } from '../../../../Functions/close';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getStudentsTeachers } from '../../../../../../controllers/lessonsControlle.js/getStudentsTeachers';
import { setLessons } from '../../../../../../controllers/lessonsControlle.js/setLessons';
import { setPopupType } from '../../../../../../store/slices/popup';

const colorOptions = [
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

const Lessons = ({popup}) => {

    const dispatch = useDispatch()
    const {closePopup} = useClosePopup()
    const router = useRouter()

    const {
        lesson_id='',
        lesson_name='',
        lesson_type=1,
        lesson_color='#f44336',
        lesson_status='',
        lesson_students=[],
        lesson_teachers=[],
        lesson_link=""
    } = popup.functions


    const [studentsTeachers,setStudentsTeachers] = useState({
        lessons_students: [],
        lessons_teachers: []
    })

    const [functions,setFunctions] = useState({
        lesson_id,
        lesson_name,
        lesson_type,
        lesson_status,
        lesson_color: colorOptions[colorOptions.findIndex(color=>color.color === lesson_color)],
        lesson_students,
        lesson_teachers,
        lesson_link
    })
    

    const inputHandler = (e) =>{
        setFunctions({...functions,[e.target.name]: e.target.value})
    }

    const selectHandler = (e,select) =>{
        setFunctions({...functions,[select]: e})
    }

    useEffect(()=>{
        const get = async () =>{
            const st = await getStudentsTeachers()
            setStudentsTeachers({...studentsTeachers,lesson_students: st.students, lesson_teachers: st.teachers})
        }
        get()
    },[])

    const radiosHandler = (index) =>{
        setFunctions({...functions,lesson_type: index})
    }


    const radios = [{text:'Группа'},{text: 'Индивидуальное'}].map((radio,index)=>(
        <div className={popupStyles.inputRadio} onClick={()=>radiosHandler(index+1)}>
            <div className={`${popupStyles.radio} ${index+1 === functions.lesson_type && popupStyles.checked}`}></div>
            <div style={{marginLeft: '10px'}}>{radio.text}</div>
        </div>
    ))

    const setLesson = () =>{
        setLessons(functions)
        dispatch(setPopupType({type: ''}))
        router.replace(router.asPath)
    }

    return (
        <div className={popupStyles.popupContent}> 
            <div className={popupStyles.close} onClick={closePopup}>
                <svg id="cross" width="100%" height="100%" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg"><path fill="#666666" d="M7.678 6.88l5.657-5.656a1 1 0 1 1 1.414 1.414L9.092 8.295l5.657 5.657a1 1 0 1 1-1.414 1.414L7.678 9.709l-5.657 5.657a1 1 0 0 1-1.414-1.414l5.657-5.657L.607 2.638A1 1 0 1 1 2.02 1.224L7.678 6.88z"></path></svg>
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Тип</p>
                <div className={popupStyles.radioContainer}>
                    {radios}
                </div>
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Название</p>
                <input 
                    name='lesson_name'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.lesson_name}
                />
            </div>
            <div className={popupStyles.justifyContent}>
                <p>Цвет</p>
                <Select 
                    className={popupStyles.select}
                    options={colorOptions}
                    placeholder={colorOptions[0]}
                    value={functions.lesson_color}
                    onChange={(e)=>selectHandler(e,'lesson_color')}
                />
            </div>
            {!lesson_id &&
                <>
                    <div className={popupStyles.justifyContent}>
                        <p>Ученики</p>
                        <Select 
                            className={popupStyles.select}
                            placeholder={''}
                            options={studentsTeachers.lesson_students}
                            onChange={(e)=>selectHandler(e,'lesson_students')}
                            isMulti
                            noOptionsMessage={() => 'Нет вариантов'}
                        />
                    </div>
                    <div className={popupStyles.justifyContent}>
                        <p>Педагоги</p>
                        <Select 
                            className={popupStyles.select}
                            placeholder={''}
                            options={studentsTeachers.lesson_teachers}
                            onChange={(e)=>selectHandler([e],'lesson_teachers')}
                            noOptionsMessage={() => 'Нет вариантов'}
                        />
                    </div>
                </>
            }
            <div className={popupStyles.justifyContent}>
                <p>Zoom</p>
                <input 
                    name='lesson_link'
                    className={popupStyles.input}
                    onChange={inputHandler}
                    value={functions.lesson_link}
                />
            </div>
            <div className={popupStyles.buttons}>
                <button onClick={setLesson} className={popupStyles.save}>
                    {lesson_id ? 'Сохранить' : 'Добавить'}
                </button>
            </div>
        </div>
    )
}

export default Lessons

