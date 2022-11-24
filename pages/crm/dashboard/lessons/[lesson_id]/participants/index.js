import React from 'react'
import Container from '../../../../../../components/Container/Container'
import Profile from '../../../../../../components/Container/profilesContainer/Profile'
import Participants from '../../../../../../components/Lessons/Lesson/LessonPages/Participants'
import { getLessonParticipants} from '../../../../../../controllers/pagesController/lesson_id/getLesson'


const LessonParticipants = ({lesson,participants}) => {

    return (
        <Container titlte='Занятие' header='Занятие'>
            <Profile
                lesson={lesson} 
                component={{
                    addInfo: '', 
                    name: lesson.lesson_name, 
                    avatar: <div style={{background: lesson.lesson_color,borderRadius: '50%'}}></div>,
                    popup_type: 'lessons',
                    functions: lesson
                }}
            >
                <Participants lesson={lesson} participants={participants}/>
            </Profile>
        </Container>
    )
}

export default LessonParticipants

export const getServerSideProps = async (ctx) => {
    const server = await getLessonParticipants(ctx)
    return server
}