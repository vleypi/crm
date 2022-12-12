import {errorRedirect} from '../../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getStudentLessons = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`${process.env.API}/api/pages/getStudent/lessons?user_id=${ctx.params.user_id }`, {
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

export const getStudentSchedule = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`${process.env.API}/api/pages/getStudent/schedule?user_id=${ctx.params.user_id }`, {
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