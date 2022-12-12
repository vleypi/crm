import axios from 'axios'

export const setName = async (name) =>{
    const res = await axios.post(`http://62.113.96.105:5001/api/profile/setName`,{
        name
    }, {withCredentials: true})
    return res.data
}
