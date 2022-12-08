import Chat from "./Chat/Chat"

const Roster = ({styles,chats}) => {

    const chatsMap = chats.map((chat)=>(
        <Chat key={chat.chat_id} styles={styles} chat={chat}/>
    ))

    return (
        <div className={styles.roster}>
            {chatsMap}
        </div>
    )
}

export default Roster