import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getTeachers = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://localhost:5001/api/pages/getTeachers${ctx.query.name ? '?name='+ctx.query.name : ''}`, {
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