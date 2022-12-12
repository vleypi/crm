import { useState } from 'react';
import styles from '../../styles/auth/auth.module.css'
import { useRouter } from 'next/router';
import { login } from '../../controllers/authController/authController';
import { useDispatch } from 'react-redux';

const Auth = ({role}) =>{

    const dispatch = useDispatch()

    const router = useRouter()
    const [activeLang,setActiveLang] = useState(0)

    const options = [
        { value: 'ru', label: 'Русский' },
        { value: 'en', label: 'English' },
    ]

    const languagesBtnsHandler = (index) =>{
        setActiveLang(index)
    }

    const languagesBtns = options.map((m,index)=>(
        <button 
            onClick={()=>languagesBtnsHandler(index)}
            className={index === activeLang && styles.active}
        >
            {m.label}
        </button>
    ))

    const [checked,setChecked] = useState(false)

    const [errorForm,setErrorForm] = useState({
        errorForm: null,
        email: null,
        password: null
    })

    const [inputValues,setInputValues] = useState({
        password: '',
        email: ''
    })

    const inputHandler = (e) =>{
        setInputValues({...inputValues,[e.target.type]: e.target.value})
        setErrorForm({...errorForm,[e.target.type]: null})
    }

    const [mes,setMes] = useState(null)

    const signin = async () =>{
        try{
            if(!inputValues.email && !inputValues.password){
                setErrorForm({...errorForm,
                    email: 'Заполните поле "Email"',
                    password: 'Заполните поле "Password"'
                })
            }
            else if(!inputValues.email){
                setErrorForm({...errorForm,
                    email: 'Заполните поле "Email"',
                        
                })
            }
            else if(!inputValues.password){
                setErrorForm({...errorForm,
                    password: 'Заполните поле "Password"'
                })
            }
            else{
                const mes = await login(inputValues,dispatch,router)
                setMes(mes)
            }
        }
        catch(err){
            setMes('Неверный логин или пароль')
        }
    }


    return(
        <div className={styles.auth}>
            <div className={styles.title}>Войти</div>
            <div className={styles.inputForm}>
                <input type="email" placeholder='Email' className={styles.email} value={inputValues.email} onChange={inputHandler}/>
                {errorForm.email && <span className={styles.errorForm}>{errorForm.email}</span>}
            </div>
            <div className={styles.inputForm}>
                <input type="password" placeholder='Пароль' className={styles.password} value={inputValues.password} onChange={inputHandler}/>
                {errorForm.password && <span className={styles.errorForm}>{errorForm.password}</span>}
            </div>
            <button className={styles.signin} onClick={signin}>Войти</button>
            {mes && <p style={{color: 'red'}}>{mes}</p>}
        </div>
    )
}

export default Auth