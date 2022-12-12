import axios from 'axios'

export const getStudentsTeachers = async (functions) =>{
    try{
        const res = await axios.post(`https://62.113.96.105:5001/api/lessons/getStudentsTeachers`,{}, {withCredentials: true})
        return res.data
    }
    catch(err){
        return err.response.data
    }
}
