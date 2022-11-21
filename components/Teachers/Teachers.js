import { useState } from 'react'
import styles from '../../styles/students/students.module.css'
import table from '../../styles/table/table.module.css'

const Teachers = (props) => {

    const [teachers,setTeachers] = useState(props.teachers)

    const teachersTable = teachers.map((teacher)=>(
        <tr className={table.tableItem} key={teacher.user_id}>
            <td>{teacher.name}</td>
            <td>{teacher.phone ? teacher.phone : 'Не указан'}</td>
            <td>{teacher.balance}</td>
            <td>{teacher.gender ? teacher.gender : 'Не указан'}</td>
            <td>Активный</td>
        </tr>
    ))

    return (
        <div className={styles.students}>
            <table className={table.commonTable}>
                <thead>
                    <tr>
                        <th>Педагог</th>
                        <th>Телефон</th>
                        <th>Баланс</th>
                        <th>Пол</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {teachersTable}
                </tbody>
            </table>
        </div>
    )
}

export default Teachers