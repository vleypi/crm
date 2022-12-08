import React from 'react'
import ReactLinkify from 'react-linkify'

const Message = ({styles,message,user_id}) => {

    const message_date = new Date(Number(message.message_date))
   
    const time = String(message_date.getHours()).padStart(2, '0') + ":" + String(message_date.getMinutes()).padStart(2, '0')
    
    return (
        <div className={styles.message}>
            <div 
                className={styles.messageContent}
                style={{
                    float: user_id === message.user_id ? 'right' : 'left',
                    background: user_id === message.user_id ? '#e2f7cb' : '#f2f2f2',
                }}
            >
                <p className={styles.name}>
                    <ReactLinkify>
                        {message.name}
                    </ReactLinkify>
                </p>
                <p className={styles.message_text}>
                    <ReactLinkify>
                        {message.message_text}
                    </ReactLinkify>
                </p>
                <p className={styles.message_date}>
                    {time}
                    
                </p>
            </div>
        </div>
    )
}

export default Message