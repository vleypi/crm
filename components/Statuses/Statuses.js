import { useState } from "react"
import styles from '../../styles/statuses/statuses.module.css'
import StatusesStudent from "./Statuses/StatusesStudent"
import StatusesVisit from "./Statuses_visit/StatusesVisit"

const Statuses = (props) => {
    return (
        <div className={styles.statuses}>
          <StatusesStudent statuses={props.statuses} styles={styles}/>
          <StatusesVisit statuses_visits={props.statuses_visits} styles={styles}/>
        </div>
    )
}

export default Statuses