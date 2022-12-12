import axios from 'axios'

export const changeAppointment = async (changes,appointment_id) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/schedule/changeAppointment`,{
            changes,appointment_id,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
