import axios from 'axios'

export const createChat = async (props) =>{
    try{

        const res = await axios.post(`https://62.113.96.105:5001/api/chat/createChat`,{
            chat_roster: props.chat_roster,
            chat_name: props.chat_name
        }, {withCredentials: true})
        return res.data
    }
    catch(err){
        console.log(err)
        return err.response.data
    }
}
