import { useRouter } from 'next/router'
import React from 'react'

const Header = ({chat,styles,users,role}) => {

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

    console.log(role)

    return (
        <div className={styles.header} onClick={()=>router.push(role != 'Ученик' ? '/crm/dashboard/chats/'+chat.chat_id+'/settings' : router.asPath)}>
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