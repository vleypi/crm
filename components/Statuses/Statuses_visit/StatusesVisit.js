import { useState } from "react"
import table from '../../../styles/table/table.module.css'

const StatusesVisit = (props) => {
    const [statusesVisits,setStatusesVisits] = useState(props.statuses_visits)
    
    const statusesTable = statusesVisits.map((status)=>(
        <tr className={table.tableItem} key={status.status_id}>
            <td>{status.status_name}</td>
            <td>{status.status_withdraw ? 'Да' : 'Нет'}</td>
            <td>{status.status_pay ? 'Да' : 'Нет'}</td>
            <td>{status.status_visited ? 'Да' : 'Нет'}</td>
        </tr>
    ))  
  
    return (
        <table className={table.commonTable}>
              <thead>
                  <tr>
                      <th>Название</th>
                      <th>Списывать</th>
                      <th>Оплачивать</th>
                      <th>Посетил</th>
                  </tr>
              </thead>
              <tbody>
                  {statusesTable}
              </tbody>
        </table>
    )
}

export default StatusesVisit