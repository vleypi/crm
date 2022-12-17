import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getEditor = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://localhost:5001/api/pages/getEditor?blog_id=${ctx.query.blog_id ? ctx.query.blog_id : ''}`, {
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