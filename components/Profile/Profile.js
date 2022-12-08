import Avatar from "./Avatar/Avatar"

import styles from '../../styles/profile/profilePage/profile.module.css'
import Name from "./Name/Name"
import Password from "./Password/Password"


const Profile = (props) => {


  return (
    <div className={styles.profile}>
        <Avatar user={props.user} styles={styles}/>
        <Name user={props.user} styles={styles}/>
        <Password user={props.user} styles={styles}/>
    </div>
  )
}

export default Profile