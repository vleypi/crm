import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../styles/chats/chats.module.css'
import Chat from './Chat/Chat'
import Roster from './Roster/Roster'
import {socket} from '../../pages/_app'

const Chats = ({chats,user_id,chat,users}) => {
    
    return (
        <div className={styles.chats}>
            <Roster styles={styles} chats={chats} user_id={user_id}/>
            <Chat styles={styles} chat={chat} user_id={user_id} users={users}/>
        </div>
    )
}

export default Chats