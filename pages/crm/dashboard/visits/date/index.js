
import Container from "../../../../../components/Container/Container"
import {getVisits} from '../../../../../controllers/pagesController/getVisits'

const Date = (props) =>{
    return(
        <Container title="Посещенеия" header="Посещения">
            
        </Container>
    )
}

export default Date

export const getServerSideProps = async (ctx) =>{
    const server = await getVisits(ctx)
    return server

}