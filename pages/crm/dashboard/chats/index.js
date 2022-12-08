import Container from '../../../../components/Container/Container'
import ChatsComponent from '../../../../components/Chats/Chats'
import { getChats } from '../../../../controllers/pagesController/getChats'

const Chats = (props) => {
    return (
        <Container titlte={'Связь'} header={'Связь'} role={props.role}>
            <ChatsComponent chats={props.chats}/>
        </Container>
    )
}

export default Chats

export const getServerSideProps = async (ctx) => {
    try{
        const chats = await getChats(ctx)

        return {
            props: chats
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