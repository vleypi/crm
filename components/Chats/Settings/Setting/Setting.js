import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Select from 'react-select'
import { saveChat } from '../../../../controllers/chatController/saveChat'

const Creator = ({styles,users,chat,roster,user_id}) => {

    const router = useRouter()


    const userValue = users.map((user)=>{
        return{
            value: user.user_id,
            label: user.name,
            name: user.name,
            user_id: user.user_id,
            avatar: user.avatar
        }
    })

    

    const [values,setValues] = useState({
        chat_roster: userValue.filter(user=>user.user_id != user_id) ,
        chat_name: chat.chat_name
    })


    const valuesInputHandler = (e) =>{
        setValues({...values,chat_name: e.target.value})
    }

    const valuesSelectHandler = (e) =>{
        setValues({...values,chat_roster: e})
    }

    const create = async () =>{
        if(values.chat_name){
            const res = await saveChat({chat_roster: values.chat_roster,chat_name: values.chat_name,chat_id: chat.chat_id,user_id})

            router.replace('/crm/dashboard/chats/'+chat.chat_id)
        }
    }

    return (
            <div className={styles.creator}>
                <h3>{chat.chat_name}</h3>
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
                        options={roster}
                        value={values.chat_roster}
                        onChange={valuesSelectHandler}
                    />
                </div>
                <button style={{marginTop: 30, width: 200}} className={styles.createBtn} onClick={create}>Сохранить</button>
            </div>
    )
}

export default Creator