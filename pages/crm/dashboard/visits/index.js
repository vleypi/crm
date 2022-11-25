import dynamic from "next/dynamic"
import Container from "../../../../components/Container/Container"

const VisitsComponent = dynamic(
    ()=>import('../../../../components/Visits/Visits'),
    {ssr: false}
)

const Visits = (props) =>{
    
    return(
        <Container title="Посещенеия" header="Посещения">
            <VisitsComponent />
        </Container>
    )
}

export default Visits

export const getServerSideProps = () =>{
    
    return{
        props: {
            
        }
    }
}