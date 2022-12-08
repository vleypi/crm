import { useRouter } from 'next/router';
import ChatForm from './ChatForm/ChatForm';
import Header from './Header/Header';
import Messages from './Messages/Messages';

const Chat = ({styles,chat,messages,users,user_id}) => {

    const router = useRouter()

    return (
        <>
            {!router.query.chat_id ?
                <div className={styles.noChat}>
                    Выберите чат для начала общения
                </div> :
                <div className={styles.chat}>
                    <Header styles={styles} chat={chat}/>
                    <Messages styles={styles} chat={chat} messages={messages} user_id={user_id}/>
                    <ChatForm styles={styles}/>
                </div>
            }
        </>
    )
}

export default Chat 