import axios from 'axios'

export const setStatus = async (functions) =>{
    try{
        const res = await axios.post(`http://62.113.96.105:5001/api/statuses/setStatuses`,{
            status_name: functions.status_name,
            status_color: functions.status_color.color,
            status_withdraw: functions.status_withdraw,
            status_pay: functions.status_pay,
            status_visited: functions.status_visited,
            status_id: functions.status_id,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
