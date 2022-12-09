import { CoPresentSharp } from '@mui/icons-material'
import {useEffect, useRef, useState} from 'react'
import useSocket from '../../../../hooks/useSocket'
import Message from './Message/Message'

const Messages = ({styles,chat,user_id}) => {


    const [messages,setMessages] = useState(chat.messages)

    const socket = useSocket()


    useEffect(()=>{
        if(socket){

            socket.on('getMessage',(message)=>{
                setMessages((prev)=>{
                    return [...prev,message]
                })
            })

            socket.on('deletedMessage',(message)=>{
                setMessages((prev)=>{
                    return prev.filter(mes=>mes.message_id != message.message_id)
                })
            })
        }
    },[socket])

    const [contextmenu,setContextmenu] = useState({message: null})

    const contextmenuHandler = (message) =>{
        setContextmenu({message})
    }

    const contextmenuFunctions = (action,state) =>{
        socket && socket.emit(action,state)
        setContextmenu({message: null})
    }

    const messagesEndRef = useRef(null)

    useEffect(()=>{
        messagesEndRef.current?.scrollIntoView()
    },[messages])

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
                        <Message styles={styles} user_id={user_id} message={mes} contextmenuHandler={contextmenuHandler} contextmenu={contextmenu} contextmenuFunctions={contextmenuFunctions}/>
                    ))
                }
                <div ref={messagesEndRef} />
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