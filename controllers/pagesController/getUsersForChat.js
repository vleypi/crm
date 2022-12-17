import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getUsersForChat = async (ctx) =>{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://62.113.96.105:5001/api/pages/getUsersForChat`, {
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
