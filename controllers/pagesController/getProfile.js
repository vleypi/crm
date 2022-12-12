import {errorRedirect} from '../errorRedirect/errorRedirect'
import axios from 'axios'
import nookies from 'nookies'

export const getProfile = async (ctx) =>{
    try{
        const cookies = nookies.get(ctx)
        const res = await axios.get(`${process.env.API}/api/pages/getProfile`, {
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
    catch(err){
        return {
            redirect: {
                permanent: false,
                destination: "/auth",
            }
        }
    }
}