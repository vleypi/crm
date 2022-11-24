import React from 'react'
import Container from '../../../../../components/Container/Container'


const Student = () => {
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика'>
            
        </Container>
    )
}

export default Student

export const getServerSideProps = async (ctx) => {
    return {
        redirect: {
            permanent: false,
            destination: "/crm/dashboard/students/"+ctx.params.user_id+"/lessons",
        }
    }
}