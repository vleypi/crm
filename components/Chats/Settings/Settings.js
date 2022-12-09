import styles from '../../../styles/chats/chats.module.css'
import Roster from '../Roster/Roster'
import Setting from './Setting/Setting'

const Settings = ({chats,user_id,users,chat,roster}) => {
    return (
        <div className={styles.chats}>
            <Roster styles={styles} chats={chats} user_id={user_id}/>
            <Setting styles={styles} users={users} user_id={user_id} chat={chat} roster={roster}/>
        </div>
    )
}

export default Settings