import axios from 'axios'

export const setPassword = async (props) =>{
    const res = await axios.post(`${process.env.API}/api/profile/setPassword`,{
            oldPassword: props.oldPassword,
            newPassword: props.newPassword
    }, {withCredentials: true})
    return res.data
}
