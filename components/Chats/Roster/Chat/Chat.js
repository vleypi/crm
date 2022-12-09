import { useRouter } from 'next/router'
import React from 'react'

const Chat = ({styles,chat}) => {

    const router = useRouter()

    const routerHandler = () =>{
        router.push('/crm/dashboard/chats/'+chat.chat_id)
    }
    

    return (
        <div className={styles.chatRoster} onClick={routerHandler}>
                <div className={styles.avatar}>
                    <div>{chat.chat_name[0]}</div>
                </div>
                <div>
                    <div className={styles.chatName} style={{wordBreak: 'break-word'}}>{chat.chat_name.substr(0,25)}{chat.chat_name.length > 25 && '...'}</div>
                    {chat.lastMessage &&
                        <div className={styles.lastMessage}>
                            <div style={{wordBreak: 'break-word'}}>{chat.lastMessage.name}: {chat.lastMessage.message_text.substr(0,25)}{chat.lastMessage.message_text.length > 25 && '...'}</div>
                        </div>
                    }
                </div>
        </div>
    )
}

export default Chat