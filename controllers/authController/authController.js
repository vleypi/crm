import axios from 'axios'
import { setProfile } from '../../store/slices/profile'

export const login = async (inputValues,dispatch,router) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/auth/login`,{
            email: inputValues.email,
            password: inputValues.password
        }, {withCredentials: true})
        dispatch(setProfile(res.data))
        router.replace('/crm/dashboard/profile')
    }
    catch(err){
        return err.response.data.mes
    }
}

export const setUser = async (functions) =>{
    try{

        const res = await axios.post(`${process.env.API}/api/auth/setUser`,{
            status: functions.status,
            gender: functions.gender,
            phone: functions.phone,
            email: functions.email,
            password: functions.password,
            name: functions.name,
            role: functions.role,
            user_id: functions.user_id || null
        }, {withCredentials: true})
    }
    catch(err){
        return err.response.data
    }
}

export const auth = async (dispatch) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/user/auth`, {},{
            withCredentials: true
        })
        dispatch(setProfile(res.data.user))
        // dispatch(setPreloader({preloader: false}))
    }
    catch(err){
        if(err.response){
            if(err.response.data.message === 'UnauthorizedToken'){
                dispatch(setProfile({name: null,surname: null,email: null,user_id: null,phone: null,role: null,token: null}))
                // dispatch(setPreloader({preloader: false}))
            }
            else if(err.response.data.message === 'Unauthorized'){
                refreshTokenAuth(auth,dispatch)
            }
        }
    }
}

export const refreshTokenAuth = async (request,dispatch) =>{
    try{
        await axios.post(`${process.env.API}/api/user/refresh`, {},{
            withCredentials: true
        })
        request(dispatch)
    }
    catch(err){
        dispatch(setProfile({name: null,surname: null,email: null,user_id: null,phone: null,role: null,token: null}))
        // dispatch(setPreloader({prealoder: false}))
    }
}

export const logout = async (router,dispatch) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/auth/logout`,{}, {withCredentials: true})
        dispatch(setProfile({name: null,surname: null,email: null,user_id: null,phone: null,role: null,token: null}))
        router.replace('/auth')
    }
    catch(err){
        return err.response.data
    }
}