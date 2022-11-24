import { useState } from 'react'
import table from '../../styles/table/table.module.css'
import {useRouter} from 'next/router'

const Students = (props) => {

    const router = useRouter()

    const studentsTable = props.students.map((student)=>(
        <tr className={table.tableItem} key={student.user_id} onClick={()=>router.push('students/'+student.user_id)}>
            <td>{student.name}</td>
            <td>{student.phone ? student.phone : 'Не указан'}</td>
            <td>{student.balance}</td>
            <td>{student.gender ? student.gender : 'Не указан'}</td>
            <td>Активный</td>
        </tr>
    ))

    return (
        <div>
            <table className={table.commonTable}>
                <thead>
                    <tr>
                        <th>Ученик</th>
                        <th>Телефон</th>
                        <th>Баланс</th>
                        <th>Пол</th>
                        <th>Статус</th>
                    </tr>
                </thead>
                <tbody>
                    {studentsTable}
                </tbody>
            </table>
        </div>
    )
}

export default Students