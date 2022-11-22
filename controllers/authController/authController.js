import axios from 'axios'
import { setProfile } from '../../store/slices/profile'

export const login = async (inputValues,dispatch,router) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/auth/login',{
            email: inputValues.email,
            password: inputValues.password
        }, {withCredentials: true})
        dispatch(setProfile(res.data))
        router.replace('/crm/dashboard/main')
    }
    catch(err){
        return err.response.data
    }
}

export const setUser = async (functions) =>{
    try{
        console.log(functions)
        const res = await axios.post('http://localhost:5001/api/auth/setUser',{
            status: functions.status,
            gender: functions.gender,
            phone: functions.phone,
            email: functions.email,
            password: functions.password,
            name: functions.name,
            role: functions.role
        }, {withCredentials: true})
    }
    catch(err){
        return err.response.data
    }
}

export const auth = async (dispatch) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/user/auth', {},{
            withCredentials: true
        })
        dispatch(setProfile(res.data.user))
        // dispatch(setPreloader({preloader: false}))
    }
    catch(err){
        if(err.response.data.message === 'UnauthorizedToken'){
            dispatch(setProfile({name: null,surname: null,email: null,user_id: null,phone: null,role: null,token: null}))
            // dispatch(setPreloader({preloader: false}))
        }
        else if(err.response.data.message === 'Unauthorized'){
            refreshTokenAuth(auth,dispatch)
        }
    }
}

export const refreshTokenAuth = async (request,dispatch) =>{
    try{
        await axios.post('http://localhost:5001/api/user/refresh', {},{
            withCredentials: true
        })
        request(dispatch)
    }
    catch(err){
        dispatch(setProfile({name: null,surname: null,email: null,user_id: null,phone: null,role: null,token: null}))
        // dispatch(setPreloader({prealoder: false}))
    }
}