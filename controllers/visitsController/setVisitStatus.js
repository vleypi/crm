import axios from 'axios'

export const setVisitStatus = async (option,student,visit_id,query) =>{
    try{
        const res = await axios.post(`http://62.113.96.105:5001/api/visits/setVisitStatus`,{
            option,student,visit_id,query
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
