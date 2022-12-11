import Container from '../../../../../components/Container/Container'
import ChatsComponent from '../../../../../components/Chats/Chats'
import { getChats } from '../../../../../controllers/pagesController/getChats'
import { getChat } from '../../../../../controllers/pagesController/chat_id/getChat'


const Chats = (props) => {

    return (
        <Container titlte={'Связь'} header={'Связь'} role={props.role}>
            <ChatsComponent user_id={props.user_id} chats={props.chats} chat={props.chat} users={props.users} role={props.role}/>
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