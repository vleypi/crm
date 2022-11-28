import Container from '../../../../components/Container/Container'
import ScheduleComponent from '../../../../components/Schedule/Schedule'
import { getSchedule } from '../../../../controllers/pagesController/getSchedule'

const Schedule = (props) => {
    return (
        <Container titlte={'Расписание'} header={'Расписание'}>
            <ScheduleComponent appointments={props.appointments} lessons={props.lessons}/>
        </Container>
    )
}

export default Schedule


export const getServerSideProps = async (ctx) => {
    const server = await getSchedule(ctx)
    return server
}