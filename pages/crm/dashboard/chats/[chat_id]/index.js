import Container from '../../../../../components/Container/Container'
import ChatsComponent from '../../../../../components/Chats/Chats'
import { getChats } from '../../../../../controllers/pagesController/getChats'
import { getChat } from '../../../../../controllers/pagesController/chat_id/getChat'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setChat } from '../../../../../store/slices/chat'

const Chats = (props) => {

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(setChat(props.chat))
    },[])

    return (
        <Container titlte={'Связь'} header={'Связь'} role={props.role}>
            <ChatsComponent user_id={props.user_id} chats={props.chats}/>
        </Container>
    )
}

export default Chats

export const getServerSideProps = async (ctx) => {

    try{
        const chats = await getChats(ctx)
        const chat = await getChat(ctx)

        return {
            props: Object.assign(chats,chat)
        }
    }
    catch(err){
        console.log(err)
        return {
            redirect: {
                permanent: false,
                destination: "/404",
            }
        }
    }
}