import {errorRedirect} from '../errorRedirect/errorRedirect'

export const refreshTokenAuth = async (request,data) =>{
    try{
        await axios.post(`${process.env.API}/api/user/refresh`, {},{
            withCredentials: true
        })
        request(dispatch)
    }
    catch(err){
        return errorRedirect
    }
}