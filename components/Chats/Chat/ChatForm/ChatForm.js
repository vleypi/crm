import React from 'react'
import Textarea from 'react-textarea-autosize'

const ChatForm = ({styles}) => {
    return (
        <div className={styles.chatForm}>
            <Textarea 
                className={styles.textarea}
                maxRows={1}
                placeholder={'Введите текст сообщения...'}
            />
            <button className={styles.send}>
                Отправить
            </button>
        </div>
    )
}

export default ChatForm