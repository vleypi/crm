

import table from '../../styles/table/table.module.css'
import { useRouter } from 'next/router'

const Teachers = (props) => {

    const router = useRouter()

    const teachersTable = props.teachers.map((teacher)=>(
        <tr className={table.tableItem} key={teacher.user_id} onClick={()=>router.push('teachers/'+teacher.user_id)}>
            <td>{teacher.name}</td>
            <td>{teacher.phone ? teacher.phone : 'Не указан'}</td>
            <td>{teacher.balance}</td>
            <td>{teacher.gender ? teacher.gender : 'Не указан'}</td>
            {/* <td>Активный</td> */}
        </tr>
    ))

    return (
        <div>
            <table className={table.commonTable}>
                <thead>
                    <tr>
                        <th>Педагог</th>
                        <th>Телефон</th>
                        <th>Баланс</th>
                        <th>Пол</th>
                        {/* <th>Статус</th> */}
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