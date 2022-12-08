import React from 'react'
import Container from '../../../../../components/Container/Container'


const Teacher = (props) => {
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика' role={props.role}>
            
        </Container>
    )
}

export default Teacher

export const getServerSideProps = async (ctx) => {
    return {
        redirect: {
            permanent: false,
            destination: "/crm/dashboard/teachers/"+ctx.params.user_id+"/lessons",
        }
    }
}