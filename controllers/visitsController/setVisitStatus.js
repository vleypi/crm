import axios from 'axios'

export const setVisitStatus = async (option,student,visit_id,query) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/visits/setVisitStatus`,{
            option,student,visit_id,query
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
