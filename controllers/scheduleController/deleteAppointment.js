import axios from 'axios'

export const deleteAppointment = async (appointment) =>{
    try{
        const res = await axios.post(`http://62.113.96.105:5001/api/schedule/deleteAppointment`,{
            appointment_id: appointment,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
