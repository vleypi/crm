import { useState } from "react"
import { useDispatch } from "react-redux"
import { setPopupType } from "../../../store/slices/popup"
import table from '../../../styles/table/table.module.css'

const StatusesVisit = (props) => {

    const styles = props.styles
    const [statusesVisits,setStatusesVisits] = useState(props.statuses_visits)
    const dispatch = useDispatch({})

    const popupStatus = (type,contentType,functions) =>{
        dispatch(setPopupType({
            type,
            contentType,
            functions
        }))
    }

    const statusesTable = statusesVisits.map((status)=>(
        <tr 
            className={table.tableItem} 
            key={status.status_id}
            onClick={()=>popupStatus('right','statuses',status)}
        >
            <td>{status.status_name}</td>
            <td>{status.status_withdraw ? 'Да' : 'Нет'}</td>
            <td>{status.status_pay ? 'Да' : 'Нет'}</td>
            <td>{status.status_visited ? 'Да' : 'Нет'}</td>
        </tr>
    ))  
  
    return (
        <div className={styles.statusesComponent}>
            <div className={styles.status_title}>
                <p>Статусы посещений</p>
                <button onClick={()=>popupStatus('right','statuses',{})}>Добавить</button>
            </div>
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
        </div>
    )
}

export default StatusesVisit