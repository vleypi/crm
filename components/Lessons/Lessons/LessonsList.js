import {useState} from 'react'
import { useSelector } from 'react-redux'
import table from '../../../styles/table/table.module.css'


const LessonsList = (props) => {

    const styles = props.styles

    const lessonsState = useSelector((lesson)=>lesson.lessons)
    function getNoun(number, one, two, five) {
        let n = Math.abs(number);
        n %= 100;
        if (n >= 5 && n <= 20) {
          return five;
        }
        n %= 10;
        if (n === 1) {
          return one;
        }
        if (n >= 2 && n <= 4) {
          return two;
        }
        return five;
    }

    const lesson_types = ['Группа','Индивидуальные занятия']
    
    const lessonsTable = props.lessons.map((lesson,index)=>(
      <tr className={table.tableItem} key={lesson.status_id}>
            <td style={{display: 'flex',alignItems: 'center'}}>
                <div style={{width: '10px',height: '10px',background: lesson.lesson_color,marginRight: '10px',borderRadius: '50%'}}></div>
                {lesson.lesson_name}
            </td>
            <td>{lesson_types[lesson.lesson_type-1]}</td>
            <td>{lesson.students} {getNoun(lesson.students,'ученик','ученика','учеников')}</td>
            <td className={table.selectTd} style={{display: 'flex',alignItems: 'center',position: 'relative'}}>
                <div style={{width: '10px',height: '10px',background: lesson.lesson_status.status_color,marginRight: '10px',borderRadius: '50%'}}></div>
                {lesson.lesson_status.status_name}
            </td>
      </tr>
    ))  

    return (
        <div className={styles.lessonsComponent}>
            <table className={table.commonTable}>
              <thead>
                  <tr>
                      <th>Занятия</th>
                      <th>Тип</th>
                      <th>Ученики</th>
                      <th>Статус</th>
                  </tr>
              </thead>
              <tbody>
                  {lessonsTable}
              </tbody>
            </table>
        </div>
    )
}

export default LessonsList