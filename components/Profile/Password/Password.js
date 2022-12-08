import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setPassword } from '../../../controllers/profileController/setPassword'

const Password = ({user,styles}) => {


    const router = useRouter()

    const [input,setInput] = useState({
        oldPassword: '',
        newPassword: ''
    })

    const inputHandler = (e) =>{
        setInput({...input, [e.target.name]: e.target.value})
    }

    const [err,setErr] = useState()

    const savePassword = async () =>{
       try{

            await setPassword(input)

            setInput({
                oldPassword: '',
                newPassword: ''
            })

            return router.replace(router.asPath)
        }
        catch(err){
            setInput({
                oldPassword: '',
                newPassword: ''
            })
            setErr(err.response.data.mes)
            setTimeout(()=>{
                setErr('')
            },4000)
        }
    }

    return (
        <div className={styles.block}>
            <h3>{err ? <span style={{color: 'red'}}>{err}</span> : 'Изменить пароль'}</h3>
            <div className={styles.displayContainer}>
                <div className={styles.displayDiv}>
                    <input placeholder='Старый пароль' type="password" name='oldPassword' value={input.oldPassword} onChange={inputHandler}/>
                    <input placeholder='Новый пароль' type="password" name='newPassword' value={input.newPassword} onChange={inputHandler}/>
                </div>
                <button disabled={err || !input.oldPassword || !input.newPassword} className={styles.save} onClick={savePassword}>Сохранить</button>
            </div>
        </div>
    )
}

export default Password