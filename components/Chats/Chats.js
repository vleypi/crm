import { useSelector } from 'react-redux'
import styles from '../../styles/chats/chats.module.css'
import Chat from './Chat/Chat'
import Roster from './Roster/Roster'

const Chats = ({chats,user_id}) => {

    const chat = useSelector(({chat})=>chat)

    return (
        <div className={styles.chats}>
            <Roster styles={styles} chats={chats}/>
            <Chat styles={styles} chat={chat} messages={chat.messages} user_id={user_id}/>
        </div>
    )
}

export default Chats