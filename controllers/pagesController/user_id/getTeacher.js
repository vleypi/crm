import {errorRedirect} from '../../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getTeacherLessons = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://localhost:5001/api/pages/getTeacher/lessons?user_id=${ctx.params.user_id }`, {
            data: {
                ref: cookies.ref ? cookies.ref : '',
                acc: cookies.acc ? cookies.acc : '',
            }
        },
        {
            withCredentials: true
        })

        return{
            props: res.data
        }
    }
    catch(err){
        console.log(err)
        return errorRedirect
    }
}

export const getTeacherSchedule = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://localhost:5001/api/pages/getTeacher/schedule?user_id=${ctx.params.user_id }`, {
            data: {
                ref: cookies.ref ? cookies.ref : '',
                acc: cookies.acc ? cookies.acc : '',
            }
        },
        {
            withCredentials: true
        })

        return{
            props: res.data
        }
    }
    catch(err){
        return errorRedirect
    }
}