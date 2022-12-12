import axios from 'axios'

export const getStudentsTeachers = async (functions) =>{
    try{
        const res = await axios.post(`${process.env.API}/api/lessons/getStudentsTeachers`,{}, {withCredentials: true})
        return res.data
    }
    catch(err){
        return err.response.data
    }
}
