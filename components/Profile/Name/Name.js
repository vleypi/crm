import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setName } from '../../../controllers/profileController/setName'
import {setName as setNameProfile} from '../../../store/slices/profile'

const Name = ({user,styles}) => {

    const dispatch = useDispatch()

    const router = useRouter()

    const name = user.user.name

    const [inputName,setInputName] = useState(name)

    const inputHandler = (e) =>{
        setInputName(e.target.value)
    }

    const [err,setErr] = useState()

    const saveName = async () =>{
        try{
            await setName(inputName)

            dispatch(setNameProfile(inputName))

            return router.replace(router.asPath)
        }
        catch(err){
            setErr(err.response.data.mes)
            setTimeout(()=>{
                setErr('')
            },4000)
        }
    }

    return (
        <div className={styles.block}>
            <h3>{err ? <span style={{color: 'red'}}>{err}</span> : 'Общие данные'}</h3>
            <div className={styles.displayContainer}>
                <div className={styles.displayDiv}>
                    <input placeholder='Имя' value={inputName} onChange={inputHandler}/>
                </div>
                <button disabled={err || !inputName || name == inputName} className={styles.save} onClick={saveName}>Сохранить</button>
            </div>
        </div>
    )
}

export default Name