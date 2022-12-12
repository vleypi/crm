import axios from 'axios'

export const setAvatar = async (files) =>{
    try{

        const res = await axios.post(`https://62.113.96.105:5001/api/profile/setAvatar`,{
            files
        }, {withCredentials: true,headers: {'Content-Type': 'multipart/form-data'}})
        return res.data
    }
    catch(err){
        console.log(err)
        return err.response.data
    }
}
