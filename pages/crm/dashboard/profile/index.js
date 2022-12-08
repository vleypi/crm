import Container from '../../../../components/Container/Container'
import { getProfile } from '../../../../controllers/pagesController/getProfile'
import ProfileComponent from '../../../../components/Profile/Profile'

const Profile = (props) => {
    return (
        <Container titlte={'Профиль'} header={'Профиль'} role={props.role}>
            <ProfileComponent user={props}/>
        </Container>
    )
}

export default Profile


export const getServerSideProps = async (ctx) => {
    const server = await getProfile(ctx)
    return server
}