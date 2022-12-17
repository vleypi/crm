import dynamic from "next/dynamic"
import Container from "../../../../components/Container/Container"


const Visits = (props) =>{
    return(
        <Container title="Посещенеия" header="Посещения" role={props.role}>
            
        </Container>
    )
}

export default Visits

export const getServerSideProps = () =>{

    const today = new Date()
    
    return{
        redirect: {
            permanent: false,
            destination: `http://localhost:3000/crm/dashboard/visits/date?day=${today.getDate()}&month=${today.getMonth()}&year=${today.getFullYear()}`,
        }
    }
}