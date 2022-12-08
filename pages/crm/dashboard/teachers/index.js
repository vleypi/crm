import React from 'react'
import Container from '../../../../components/Container/Container'
import TeachersComponent from '../../../../components/Teachers/Teachers'
import { getTeachers } from '../../../../controllers/pagesController/getTeachers'

const Teachers = ({teachers,role}) => {
    return (
        <Container titlte='Педагоги' header='Педагоги' role={role}>
            <TeachersComponent teachers={teachers}/>
        </Container>
    )
}

export default Teachers

export const getServerSideProps = async (ctx) => {
    const server = await getTeachers(ctx)
    return server
}