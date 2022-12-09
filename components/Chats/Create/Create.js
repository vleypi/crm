import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styles from '../../../styles/chats/chats.module.css'
import Chat from '../Chat/Chat'
import Roster from '../Roster/Roster'
import Creator from './Creator/Creator'

const CreateChat = ({chats,user_id,users}) => {
    return (
        <div className={styles.chats}>
            <Roster styles={styles} chats={chats} user_id={user_id}/>
            <Creator styles={styles} users={users} />
        </div>
    )
}

export default CreateChat