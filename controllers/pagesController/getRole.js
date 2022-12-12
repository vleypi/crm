import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getRole = async (ctx) =>{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`https://62.113.96.105:5001/api/pages/getRole`, {
            data: {
                ref: cookies.ref ? cookies.ref : '',
                acc: cookies.acc ? cookies.acc : '',

            }
        },
        {
            withCredentials: true
        })

        return{
            props: res.data,
        }
}