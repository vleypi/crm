import axios from 'axios'

export const deletePost = async (blog_id) =>{
    try{
        const res = await axios.post(`http://localhost:5001/api/blog/deletePost`,{
            blog_id
        }, {withCredentials: true})
       

    }
    catch(err){
        return err.response.data
    }
}
