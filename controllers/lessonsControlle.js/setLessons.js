import axios from 'axios'

export const setLessons = async (functions) =>{
    try{

        const res = await axios.post(`${process.env.API}/api/lessons/setLessons`,{
            lesson_name: functions.lesson_name,
            lesson_color: functions.lesson_color.color,
            lesson_id: functions.lesson_id,
            lesson_type: functions.lesson_type,
            lesson_students: functions.lesson_students,
            lesson_teachers: functions.lesson_teachers,
            lesson_link: functions.lesson_link
        }, {withCredentials: true})
        return res.data
    }
    catch(err){
        console.log(err)
        return err.response.data
    }
}
