import axios from 'axios'

export const deleteStatus = async (functions) =>{
    try{
        const res = await axios.post(`http://62.113.96.105:5001/api/statuses/deleteStatus`,{
            status_id: functions.status_id,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
