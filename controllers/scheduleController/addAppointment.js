import axios from 'axios'

export const addAppointment = async (appointment) =>{
    try{
        const res = await axios.post(`https://62.113.96.105:5001/api/schedule/addAppointment`,{
            appointment,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
