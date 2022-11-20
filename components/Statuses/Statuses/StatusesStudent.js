import { useState } from "react"
import table from '../../../styles/table/table.module.css'

const StatusesStudent = (props) => {
    const [statuses,setStatuses] = useState(props.statuses)
    
    const statusesTable = statuses.map((status)=>(
      <tr className={table.tableItem} key={status.status_id}>
          <td>{status.status_name}</td>
          <td>{status.status_color}</td>
      </tr>
    ))  

    return (
        <table className={table.commonTable}>
              <thead>
                  <tr>
                      <th>Название</th>
                      <th>Цвет</th>
                  </tr>
              </thead>
              <tbody>
                  {statusesTable}
              </tbody>
        </table>
    )
}

export default StatusesStudent