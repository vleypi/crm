import React from 'react'
import Container from '../../../../../../components/Container/Container'
import { getStudentLessons } from '../../../../../../controllers/pagesController/user_id/getStudent'
import Lessons from '../../../../../../components/Students/Student/StudentPages/Lessons/Lessons'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'


const Student = ({student,lessons,role}) => {
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика' role={role}>
            <Profile 
                user={student} 
                page={'students'}
                component={{
                    addInfo: student.phone, 
                    name: student.name, 
                    avatar: student.avatar,
                    popup_type: 'students',
                    functions: student
                }}
                role={role}
            >
                <Lessons student={student} lessons={lessons}/>
            </Profile>
        </Container>
    )
}

export default Student

export const getServerSideProps = async (ctx) => {
    const server = await getStudentLessons(ctx)
    return server
}