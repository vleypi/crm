import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getVisits = async (ctx) =>{
    try{
        const {appointment_id='',day,month,year} = ctx.query
        const cookies = nookies.get(ctx)
        const res = await axios.get(`https://62.113.96.105:5001/api/pages/getVisits?appointment_id=${appointment_id}&day=${day}&month=${month}&year=${year}`, {
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