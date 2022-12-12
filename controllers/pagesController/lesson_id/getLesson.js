import {errorRedirect} from '../../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getLessonParticipants = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get/(`http://62.113.96.105:5001/api/pages/getLesson/participants?lesson_id=${ctx.params.lesson_id }`, {
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