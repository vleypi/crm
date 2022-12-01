import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import { setPopupType } from '../../../../store/slices/popup'

const TeachersFilter = ({toolsStyles}) => {

    const dispatch = useDispatch()
    const lessonsState = useSelector(({lessons})=>lessons)
    const router = useRouter()

    const lessons_type_options = lessonsState.statuses.map((status)=>{
        return {
            value: status.id,
            label: status.status_name
        }
    })
    const statuses_options = lessonsState.lessons_type.map((lesson)=>{
        return {
            value: lesson.id,
            label: lesson.lesson_type_name
        }
    })

    const popupHandler = () =>{
        dispatch(setPopupType({
            type: 'right',
            contentType: 'teachers',
            functions: {
                lesson_id: ''
            }
        }))
    }


    let timeout

    const inputHandler = (e) =>{
        clearTimeout(timeout);
        if(e.target.value.length >= 0){
            timeout = setTimeout(()=>{
                router.push(`${e.target.value.length > 0 ? '?name=' : ''}${e.target.value}`)
            },300)
        }
    }

    const selectFilter = (e,type) =>{
        router.push(`${e.value ? `?${type}` : ''}`)
    }

    return (
        <div className={toolsStyles.tools}>
            <div className={toolsStyles.mainTools}>
                {/* <div className={toolsStyles.inputTool}>
                    <input placeholder='Поиск имени' onChange={inputHandler}/>
                </div>
                <div className={toolsStyles.inputTool}>
                    <input placeholder='Поиск по телефону' onChange={inputHandler}/>
                </div>
                <div className={toolsStyles.selectTool}>
                    <Select 
                        placeholder='Тип'
                        options={statuses_options}
                        onChange={(e)=>selectFilter(e,'type')}
                    />
                </div>
                <div className={toolsStyles.selectTool}>
                    <Select 
                        placeholder='Статус'
                        options={lessons_type_options}
                        onChange={(e)=>selectFilter(e,'status')}
                    />
                </div>
                <div className={toolsStyles.selectTool}>
                    <Select 
                        placeholder='Пол'
                        options={lessons_type_options}
                        onChange={(e)=>selectFilter(e,'status')}
                    />
                </div> */}
            </div>
            <div className={toolsStyles.buttonTool}>
                <button onClick={popupHandler}>Добавить</button>
            </div>
        </div>
    )
}

export default TeachersFilter