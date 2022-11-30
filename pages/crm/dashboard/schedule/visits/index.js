import Container from '../../../../../components/Container/Container'
import { getVisits } from '../../../../../controllers/pagesController/getVisits'


const Schedule = (props) => {
    return (
        <Container titlte={'Расписание'} header={'Расписание'}>
            lol
        </Container>
    )
}

export default Schedule


export const getServerSideProps = async (ctx) => {
    const server = await getVisits(ctx)
    return server
}