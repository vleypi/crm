import { useRouter } from 'next/router'
import toolsStyles from '../../../styles/header/tools/tools.module.css'
import Students from './Students/StudentsFilter'
import LessonsFilter from './Lessons/LessonsFilter'

const Tools = () => {

    const router = useRouter()

    const tools = [
        {href: '/crm/dashboard/students'}
    ]


    return (
            <div>
                {router.pathname === '/crm/dashboard/students' && <Students />}
                {router.pathname=== '/crm/dashboard/lessons' && <LessonsFilter toolsStyles={toolsStyles}/>}
            </div>
    )
}

export default Tools