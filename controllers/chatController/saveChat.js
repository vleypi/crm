import axios from 'axios'

export const saveChat = async (props) =>{
    try{

        const res = await axios.post(`https://62.113.96.105:5001/api/chat/saveChat`,{
            chat_roster: props.chat_roster,
            chat_name: props.chat_name,
            chat_id: props.chat_id,
            user_id: props.user_id
        }, {withCredentials: true})
        return res.data
    }
    catch(err){
        console.log(err)
        return err.response.data
    }
}
