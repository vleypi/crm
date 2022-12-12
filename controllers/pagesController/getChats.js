import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getChats = async (ctx) =>{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`${process.env.API}/api/pages/getChats`, {
            data: {
                ref: cookies.ref ? cookies.ref : '',
                acc: cookies.acc ? cookies.acc : '',
            }
        },
        {
            withCredentials: true
        })

        return res.data
}