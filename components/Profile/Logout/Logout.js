import { useRouter } from 'next/router'
import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../../controllers/authController/authController'


const Password = ({user,styles}) => {


    const router = useRouter()

    const dispatch = useDispatch()

    return (
        <div className={styles.block}>
            <h3>Выход из системы</h3>
            <button onClick={()=>logout(router,dispatch)} className={styles.logout}>Выйти</button>
        </div>
    )
}

export default Password