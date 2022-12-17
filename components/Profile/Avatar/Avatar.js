import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { setAvatar } from '../../../store/slices/profile'
import { useDispatch, useSelector } from 'react-redux'

const Avatar = ({user,styles}) => {

    const profile = useSelector(({profile})=>profile)
    const router = useRouter()
    const dispatch = useDispatch()
  
    const image = user.user.avatar && `http://62.113.96.105:5001` + user.user.avatar
  
    const submit = async event => {
      event.preventDefault()
  
      const formData = new FormData()
      formData.append("image", event.target.files[0])
  
      const {data} = await axios.post(`http://62.113.96.105:5001/api/profile/setAvatar`, formData, {withCredentials: true, headers: {'Content-Type': 'multipart/form-data'}})
  
      dispatch(setAvatar(data.imagePath))
  
      return router.replace(router.asPath)
    }

    return(
        <div className={styles.block}>
            <h3>Фото профиля</h3>
            <div className={styles.avatarImg}>
                { image ? <img src={image} /> : "Нет фото"}
            </div>
            <form  className={styles.setAvatar}>
                <label class={styles.customFileUpload}>
                    <input
                        onChange={submit} 
                        type="file" 
                        accept="image/*"
                    />
                    Выбрать фото
                </label>
            </form>
        </div>
    )
}

export default Avatar