import React from 'react'
import Message from './Message/Message'
import moment from 'moment'

const Messages = ({styles,messages,user_id}) => {


    const dates = []

    messages.map((message)=>{

        const day = new Date(Number(message.message_date)).getDate()
        const month = new Date(Number(message.message_date)).getMonth()
        const year = new Date(Number(message.message_date)).getFullYear()

        dates.push(JSON.stringify({date: {day,month,year},messages: []}))
    })


    const uniqueDates = [...new Set(dates)]

    uniqueDates.map((date,index)=>{
        uniqueDates[index] = JSON.parse(date)
    })


    messages.map((message)=>{

        const day = new Date(Number(message.message_date)).getDate()
        const month = new Date(Number(message.message_date)).getMonth()
        const year = new Date(Number(message.message_date)).getFullYear()

        uniqueDates.map((u,index)=>{
            const {date} = u
            if(date.day == day && date.month == month && date.year == year){
                uniqueDates[index].messages.push(message)
            }
        })
    })


    const message = uniqueDates.map((u,index)=>{
        const {day,month,year} = u.date
       
        return (
            <>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '20px 0'
                }}>
                    {day}.{month}.{year}
                </div>
                
                {
                    u.messages.map((mes)=>(
                        <Message styles={styles} user_id={user_id} message={mes}/>
                    ))
                }
            </>
        )
    })

    return (
        <div className={styles.messages}>
            {message}
        </div>
    )
}

export default Messages