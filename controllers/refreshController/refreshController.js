import {errorRedirect} from '../errorRedirect/errorRedirect'

export const refreshTokenAuth = async (request,data) =>{
    try{
        await axios.post(`http://62.113.96.105:5001/api/user/refresh`, {},{
            withCredentials: true
        })
        request(dispatch)
    }
    catch(err){
        return errorRedirect
    }
}