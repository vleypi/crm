import axios from 'axios'

export const setPassword = async (props) =>{
    const res = await axios.post(`http://62.113.96.105:5001/api/profile/setPassword`,{
            oldPassword: props.oldPassword,
            newPassword: props.newPassword
    }, {withCredentials: true})
    return res.data
}
