import React, { useState,useRef,useEffect } from 'react'
import Textarea from 'react-textarea-autosize'
import useSocket from '../../../../hooks/useSocket'


const ChatForm = ({styles,chat,user_id}) => {

    const [value,setValue] = useState('')

    const [files,setFiles] = useState({
        file: [],
        key: Date.now()
    })


    const socket = useSocket()

    const valueHandler = (e) =>{
        setValue(e.target.value)
    }

    const sendMessage = async (event) =>{
        if(value){
            socket && await socket.emit('sendMessage',{
                chat_id: chat.chat_id,
                user_id,
                message_text: value,
                file: files.file,
                file_type: files.file.length ? files.file[0]['type'] : null
            })
            setValue('')
            setFiles({...files,file: [],key: Date.now()})
        }
    }

    const fileHandler = async (e) =>[
        setFiles({...files,file: e.target.files})
    ]

    const labelRef = useRef(null)

    useEffect(()=>{
        if(labelRef){
            labelRef.current.addEventListener('contextmenu',(e)=>{
                e.preventDefault()
                setFiles({...files,file: [],key: Date.now()})
            })
        }
    },[labelRef])

    return (
        <div className={styles.chatForm}>
            <Textarea 
                className={styles.textarea}
                maxRows={1}
                placeholder={'Введите текст сообщения...'}
                value={value}
                onChange={valueHandler}
            />
            <form  className={styles.setAvatar}>
                <label class={styles.customFileUpload} ref={labelRef}>
                    <input
                        onChange={fileHandler}
                        type="file" 
                        accept=".png,.jpg"
                        key={files.key}
                    />
                    {files.file[0]?.name ? files.file[0].name.substr(0,6) + '...' : 'Фото'}
                </label>
            </form>
            <button className={styles.send} onClick={sendMessage}>
                Отправить
            </button>
        </div>
    )
}

export default ChatForm