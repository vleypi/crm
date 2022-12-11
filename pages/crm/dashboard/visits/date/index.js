
import Container from "../../../../../components/Container/Container"
import Visits from "../../../../../components/Visits/Visits"
import {getVisits} from '../../../../../controllers/pagesController/getVisits'

const Date = (props) =>{

    return(
        <Container title="Посещенеия" header="Посещения" role={props.role}>
            <Visits props={props}/>
        </Container>
    )
}

export default Date

export const getServerSideProps = async (ctx) =>{
    const server = await getVisits(ctx)
    return server

}