import React from 'react'

const Header = ({chat,styles}) => {
    console.log(chat)
    return (
        <div className={styles.header}>
            <div className={styles.chat_name}>
                {chat.chat_name}
            </div>
            <div className={styles.chat_users}> 
                5 участников
            </div>
        </div>
    )
}

export default Header