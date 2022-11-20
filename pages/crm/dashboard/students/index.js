import React from 'react'
import Container from '../../../../components/Container/Container'
import StudentsComponent from '../../../../components/Students/Students'
import { getStudents } from '../../../../controllers/pagesController/getStudents'

const Students = ({students}) => {
    return (
        <Container titlte='Ученики' header='Ученики'>
            <StudentsComponent students={students}/>
        </Container>
    )
}

export default Students

export const getServerSideProps = async (ctx) => {
    const server = await getStudents(ctx)
    return server
}