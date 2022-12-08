import axios from 'axios'

export const setName = async (name) =>{
    const res = await axios.post('http://localhost:5001/api/profile/setName',{
        name
    }, {withCredentials: true})
    return res.data
}
