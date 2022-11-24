import React from 'react'
import Container from '../../../../../../components/Container/Container'
import { getStudentLessons } from '../../../../../../controllers/pagesController/user_id/getStudent'
import StudentComponent from '../../../../../../components/Students/Student/Student'
import Lessons from '../../../../../../components/Students/Student/StudentPages/Lessons/Lessons'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'


const Student = ({student,lessons}) => {
    return (
        <Container titlte='Профиль ученика' header='Профиль ученика'>
            <Profile component={{addInfo: student.phone, name: student.name, avatar: student.name[0]}}>
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