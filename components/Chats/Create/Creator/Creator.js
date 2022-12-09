import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Select from 'react-select'
import { createChat } from '../../../../controllers/chatController/createChat'

const Creator = ({styles,users}) => {

    const router = useRouter()

    const [values,setValues] = useState({
        chat_roster: [],
        chat_name: ''
    })

    const valuesInputHandler = (e) =>{
        setValues({...values,chat_name: e.target.value})
    }

    const valuesSelectHandler = (e) =>{
        setValues({...values,chat_roster: e})
    }

    const create = async () =>{
        if(values.chat_name){
            const res = await createChat({chat_roster: values.chat_roster,chat_name: values.chat_name})

            router.replace('/crm/dashboard/chats/'+res.chat_id)
        }
    }

    return (
            <div className={styles.creator}>
                <h3>Создание чата</h3>
                <div className={styles.chat_name}>
                    <p>Название чата</p>
                    <input value={values.chat_name} onChange={valuesInputHandler}/>
                </div>
                <div className={styles.chat_users}>
                    <p>Выбрать участников</p>
                    <Select 
                        className={styles.select}
                        placeholder={''}
                        noOptionsMessage={() => 'Нет возможных участников'}
                        isMulti
                        options={users}
                        value={values.chat_roster}
                        onChange={valuesSelectHandler}
                    />
                </div>
                <button style={{marginTop: 30, width: 200}} className={styles.createBtn} onClick={create}>Создать</button>
            </div>
    )
}

export default Creator