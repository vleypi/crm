import { useRouter } from 'next/router'
import toolsStyles from '../../../styles/header/tools/tools.module.css'
import Students from './Students/StudentsFilter'
import LessonsFilter from './Lessons/LessonsFilter'
import TeachersFilter from './Teachers/TeachersFilter'

const Tools = () => {

    const router = useRouter()

    const tools = [
        {href: '/crm/dashboard/students'}
    ]


    return (
            <div>
                {router.pathname === '/crm/dashboard/students' && <Students toolsStyles={toolsStyles}/>}
                {router.pathname=== '/crm/dashboard/lessons' && <LessonsFilter toolsStyles={toolsStyles}/>}
                {router.pathname === '/crm/dashboard/teachers' && <TeachersFilter toolsStyles={toolsStyles} />}
            </div>
    )
}

export default Tools