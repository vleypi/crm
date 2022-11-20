import { useState } from "react"
import table from '../../../styles/table/table.module.css'

const StatusesStudent = (props) => {

    const styles = props.styles
    const [statuses,setStatuses] = useState(props.statuses)
    
    const statusesTable = statuses.map((status)=>(
      <tr className={table.tableItem} key={status.status_id}>
          <td>{status.status_name}</td>
          <td>{status.status_color}</td>
      </tr>
    ))  

    return (
        <div className={styles.statusesComponent}>
            <div className={styles.status_title}>
                <p>Статусы учеников</p>
            </div>
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
        </div>
    )
}

export default StatusesStudent