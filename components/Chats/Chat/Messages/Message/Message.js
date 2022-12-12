import React, { useEffect, useRef, useState } from 'react'
import ReactLinkify from 'react-linkify'

const Message = ({styles,message,user_id,contextmenuHandler,contextmenu,contextmenuFunctions }) => {

    const message_date = new Date(Number(message.message_date))
   
    const time = String(message_date.getHours()).padStart(2, '0') + ":" + String(message_date.getMinutes()).padStart(2, '0')

    const messageRef = useRef(null)

    const contextRef = useRef()

    useEffect(()=>{
        messageRef.current.addEventListener( "contextmenu", function(e) {
            e.preventDefault()
            contextmenuHandler(message)
        });

        messageRef.current.addEventListener( "click", function(e) {
            if(!e.path.includes(contextRef.current)){
                contextmenuHandler({},{})
            }
        });
    },[])

    
    return (
        <div className={styles.message} ref={messageRef}>
            {contextmenu.message?.message_id == message.message_id && 
                <div className={styles.contextmenu} ref={contextRef}>
                     <div className={styles.chosenMes}>
                        <p className={styles.author}>{contextmenu.message.name}:</p>
                        <p>{contextmenu.message.message_text.substr(0,25)}{contextmenu.message.message_text.length > 25 && '...'}</p>
                    </div>
                    <div className={styles.tools}>
                        <div onClick={()=>contextmenuFunctions('deleteMessage',message)} style={{color: 'red'}} className={styles.tool}>Удалить</div>
                    </div>
                </div>
            }
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
                {message.message_image &&
                    <div style={{
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderTopLeftRadius: 5,
                        borderTopRightRadius: 5,
                    }}>
                         <img 
                            src={`${process.env.API}`+message.message_image} 
                            width={'100%'} 
                            height={'100%'}
                            style={{
                                objectFit: 'contain',
                                marginBottom: 10
                            }}
                        />
                    </div>
                }
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