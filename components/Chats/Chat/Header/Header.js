import { useRouter } from 'next/router'
import React from 'react'

const Header = ({chat,styles,users}) => {

    const router = useRouter()

    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
    }

    return (
        <div className={styles.header} onClick={()=>router.push('/crm/dashboard/chats/'+chat.chat_id+'/settings')}>
            <div className={styles.chat_name}>
                {chat.chat_name}
            </div>
            <div className={styles.chat_users}> 
                {users.length} {getNoun(users.length,'участник','участника','участников')}
            </div>
        </div>
    )
}

export default Header