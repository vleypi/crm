import Container from '../../../../../../components/Container/Container'
import { getChats } from '../../../../../../controllers/pagesController/getChats'
import { getChat } from '../../../../../../controllers/pagesController/chat_id/getChat'
import { getUsersForChat } from '../../../../../../controllers/pagesController/getUsersForChat'
import SettingsComponent from '../../../../../../components/Chats/Settings/Settings'

const Settings = (props) => {
    return (
        <Container titlte={'Связь'} header={'Связь'} role={props.role}>
            <SettingsComponent chats={props.chats} user_id={props.user_id} users={props.users} roster={props.roster} chat={props.chat}/>
        </Container>
    )
}

export default Settings

export const getServerSideProps = async (ctx) => {

    try{
        const chats = await getChats(ctx)
        const chat = await getChat(ctx)
        const users = await getUsersForChat(ctx)

        let roster = {
            roster: users.users.map((user)=>{
                return user
            })
        }

        if(chats.role == 'Ученик'){
            return {
                redirect: {
                    permanent: false,
                    destination: "/404",
                }
            }
        }

        return {
            props: Object.assign(chats,chat,roster)
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