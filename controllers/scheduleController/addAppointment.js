import axios from 'axios'

export const addAppointment = async (appointment) =>{
    try{
        const res = await axios.post(`http://localhost:5001/api/schedule/addAppointment`,{
            appointment,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
