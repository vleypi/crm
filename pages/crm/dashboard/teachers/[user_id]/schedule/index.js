import React from 'react'
import Container from '../../../../../../components/Container/Container'
import { getTeacherSchedule } from '../../../../../../controllers/pagesController/user_id/getTeacher'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'
import Schedule from '../../../../../../components/Teachers/Teacher/TeacherPages/Schedule/Schedule'


const Teacher = (props) => {
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика' role={props.role}>
            <Profile 
                user={props.teacher} 
                page={'teachers'}
                component={{
                    addInfo: props.teacher.phone, 
                    name: props.teacher.name, 
                    avatar: props.teacher.name[0],
                    popup_type: 'teachers',
                    functions: props.teacher
                }}
                role={props.role}
            >
                <Schedule appointments={props.appointments} lessons={props.lessons}/>
            </Profile>
        </Container>
    )
}

export default Teacher

export const getServerSideProps = async (ctx) => {
    const server = await getTeacherSchedule(ctx)
    return server
}