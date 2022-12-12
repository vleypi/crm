import axios from 'axios'

export const publishPost = async (blocks,header,blog_id='') =>{
    try{
        const res = await axios.post(`https://62.113.96.105:5001/api/blog/publishPost`,{
            header,
            blocks,
            blog_id
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
