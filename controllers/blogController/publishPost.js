import axios from 'axios'

export const publishPost = async (props) =>{
    try{
        const res = await axios.post('http://localhost:5001/api/blog/publishPost',{
            header: props.header,
            blocks: props.blocks
        }, {withCredentials: true})
       
    }
    catch(err){
        return err.response.data
    }
}
