import React from 'react'
import Container from '../../../../../../components/Container/Container'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'
import { getTeacherLessons } from '../../../../../../controllers/pagesController/user_id/getTeacher'
import Lessons from '../../../../../../components/Teachers/Teacher/TeacherPages/Lessons/Lessons'


const TeacherLessons = ({teacher,lessons,role}) => {

    return (
        <Container titlte='Профиль педагога' header='Профиль педагога' role={role}>
            <Profile 
                user={teacher} 
                page={'teachers'}
                component={{
                    addInfo: teacher.phone, 
                    name: teacher.name, avatar: 
                    teacher.name[0],
                    popup_type: 'teachers',
                    functions: teacher
                }}
                role={role}
            >
                <Lessons teacher={teacher} lessons={lessons}/>
            </Profile>
        </Container>
    )
}

export default TeacherLessons

export const getServerSideProps = async (ctx) => {
    const server = await getTeacherLessons(ctx)
    return server
}