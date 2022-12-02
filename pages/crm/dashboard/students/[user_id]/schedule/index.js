import React from 'react'
import Container from '../../../../../../components/Container/Container'
import { getStudentSchedule } from '../../../../../../controllers/pagesController/user_id/getStudent'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'
import Schedule from '../../../../../../components/Students/Student/StudentPages/Schedule/Schedule'


const Student = ({student,appointments}) => {
    console.log(appointments)
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика'>
            <Profile 
                student={student} 
                component={{
                    addInfo: student.phone, 
                    name: student.name, 
                    avatar: student.name[0],
                    popup_type: 'students',
                    functions: student
                }}
            >
                <Schedule appointments={appointments}/>
            </Profile>
        </Container>
    )
}

export default Student

export const getServerSideProps = async (ctx) => {
    const server = await getStudentSchedule(ctx)
    return server
}