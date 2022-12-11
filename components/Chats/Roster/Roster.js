import useSocket from "../../../hooks/useSocket"
import Chat from "./Chat/Chat"
import { useEffect, useState } from "react"
import { style } from "@mui/system"
import { useRouter } from "next/router"

const Roster = ({styles,chats,user_id,role}) => {

    const router = useRouter()

    const socket = useSocket()

    const [chatsState,setChatsState] = useState(chats)

    const chatsMap = chatsState.map((chat)=>(
        <Chat key={chat.chat_id} styles={styles} chat={chat}/>
    ))


    useEffect(()=>{
        if(socket){

            socket.emit('onJoin',{user_id})

            socket.on('getMessage',(message)=>{
                setChatsState(prev=>
                    prev.map(item=>
                        item.chat_id == message.chat_id ? {...item,lastMessage: message} : item
                    )    
                )
            })

            socket.on('deletedMessage',(message)=>{
                setChatsState(prev=>
                    prev.map(item=>{
                        if(item.chat_id == message.chat_id){
                            if(!message.lastMessage.message_id){
                                delete item.lastMessage
                                return item
                            }
                            return {...item,lastMessage: message.lastMessage}
                        }
                        else{
                            return item
                        }
                    })    
                )
            })
        }
    },[socket])


    return (
        <div className={styles.roster}>
            {chatsMap}
            <div className={styles.createBtnDiv}>
                {role != 'Ученик' && <button className={styles.createBtn} onClick={()=>router.push('/crm/dashboard/chats/create')}>Создать чат</button>}
            </div>
        </div>
    )
}

export default Roster