import { useState } from "react"
import table from '../../../styles/table/table.module.css'

const StatusesStudent = (props) => {

    const styles = props.styles
    const [statuses,setStatuses] = useState(props.statuses)
    
    const statusesTable = statuses.map((status)=>(
      <tr className={table.tableItem} key={status.status_id}>
          <td style={{display: 'flex',alignItems: 'center'}}>
                <div style={{width: '10px',height: '10px',background: status.status_color,marginRight: '10px',borderRadius: '50%'}}></div>
                {status.status_name}
            </td>
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