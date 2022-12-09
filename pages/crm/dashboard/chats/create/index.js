import Container from '../../../../../components/Container/Container'
import ChatsComponent from '../../../../../components/Chats/Chats'
import { getChats } from '../../../../../controllers/pagesController/getChats'
import CreateChat from '../../../../../components/Chats/Create/Create'
import { getUsersForChat } from '../../../../../controllers/pagesController/getUsersForChat'


const Chats = (props) => {


    return (
        <Container titlte={'Связь'} header={'Связь'} role={props.role}>
            <CreateChat chats={props.chats} user_id={props.user_id} users={props.users}/>
        </Container>
    )
}

export default Chats

export const getServerSideProps = async (ctx) => {

    try{
        const chats = await getChats(ctx)
        const users = await getUsersForChat(ctx)

        return {
            props: Object.assign(chats,users)
        }
    }
    catch(err){

        return {
            redirect: {
                permanent: false,
                destination: "/404",
            }
        }
    }
}