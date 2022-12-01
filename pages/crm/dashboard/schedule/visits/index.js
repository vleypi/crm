import Container from '../../../../../components/Container/Container'
import Visits from '../../../../../components/Visits/Visits'
import { getVisits } from '../../../../../controllers/pagesController/getVisits'


const Schedule = (props) => {
    return (
        <Container titlte={'Посещения'} header={'Посещение'}>
            <Visits 
                lesson={props.lesson} 
                participants={props.participants} 
                statuses_visits={props.statuses_visits} 
                visits_users={props.visits_users}
                visit_id={props.visit_id}
            />
        </Container>
    )
}

export default Schedule


export const getServerSideProps = async (ctx) => {
    const server = await getVisits(ctx)
    return server
}