import React from 'react'
import Container from '../../../../../../components/Container/Container'
import { getStudentSchedule } from '../../../../../../controllers/pagesController/user_id/getStudent'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'
import Schedule from '../../../../../../components/Students/Student/StudentPages/Schedule/Schedule'


const Student = (props) => {

    return (
        <Container titlte='Профиль ученика' header='Профиль ученика' role={props.role}>
            <Profile 
                user={props.student} 
                page={'students'}
                component={{
                    addInfo: props.student.phone, 
                    name: props.student.name, 
                    avatar: props.student.avatar,
                    popup_type: 'students',
                    functions: props.student
                }}
                role={props.role}
            >
                <Schedule appointments={props.appointments} lessons={props.lessons}/>
            </Profile>
        </Container>
    )
}

export default Student

export const getServerSideProps = async (ctx) => {
    const server = await getStudentSchedule(ctx)
    return server
}