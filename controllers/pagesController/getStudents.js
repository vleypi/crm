import axios from 'axios'
import nookies from 'nookies'
import {errorRedirect} from '../errorRedirect/errorRedirect'

export const getStudents = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`http://62.113.96.105:5001/api/pages/getStudents`, {
            data: {
                ref: cookies.ref ? cookies.ref : '',
                acc: cookies.acc ? cookies.acc : ''
            }
        },
        {
            withCredentials: true
        })

        return{
            props:{
                students: res.data.stundents,
                role: res.data.role
            }
        }
    }
    catch(err){
        console.log(err)
        return errorRedirect
    }
}
