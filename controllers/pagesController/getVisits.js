import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getVisits = async (ctx) =>{
    try{
        const {query} = ctx
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://localhost:5001/api/pages/getVisits?lesson_id=${query.lesson_id}&day=${query.day}&month=${query.month}&year=${query.year}`, {
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