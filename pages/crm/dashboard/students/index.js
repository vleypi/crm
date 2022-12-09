import React from 'react'
import Container from '../../../../components/Container/Container'
import StudentsComponent from '../../../../components/Students/Students'
import { getStudents } from '../../../../controllers/pagesController/getStudents'

const Students = (props) => {

    return (
        <Container titlte='Ученики' header='Ученики' role={props.role}>
            <StudentsComponent students={props.students}/>
        </Container>
    )
}

export default Students

export const getServerSideProps = async (ctx) => {
    const server = await getStudents(ctx)
    return server
}