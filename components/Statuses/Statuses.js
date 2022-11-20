import { useState } from "react"
import styles from '../../styles/students/students.module.css'

import StatusesStudent from "./Statuses/StatusesStudent"
import StatusesVisit from "./Statuses_visit/StatusesVisit"

const Statuses = (props) => {
    return (
        <div className={styles.students}>
          <StatusesStudent statuses={props.statuses}/>
          <StatusesVisit statuses_visits={props.statuses_visits}/>
        </div>
    )
}

export default Statuses