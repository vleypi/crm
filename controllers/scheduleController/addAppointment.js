import axios from 'axios'

export const addAppointment = async (appointment) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/schedule/addAppointment`,{
            appointment,
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
