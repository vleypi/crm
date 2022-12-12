import axios from 'axios'

export const setName = async (name) =>{
    const res = await axios.post(`${process.env.API}/api/profile/setName`,{
        name
    }, {withCredentials: true})
    return res.data
}
