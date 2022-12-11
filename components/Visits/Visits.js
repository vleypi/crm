
import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../../styles/visits/visits.module.css'
import Appointments from "./Appointments/Appointments";
import DateRange from "./Date-range/DateRange";
import Info from "./Info/Info";
import Students from "./Students/Students";
import Teacher from "./Teacher/Teacher";

const Visits = ({props}) =>{
    console.log(props)
    return(
        <div className={styles.visits}>
            <div>
                <DateRange styles={styles}/>
                <Appointments styles={styles} appointments={props.appointments}/>
            </div>
            {props.lesson.lesson_id &&<Students role={props.role} styles={styles} lesson={props.lesson} participants={props.participants} visits_users={props.visits_users} statuses_visits={props.statuses_visits}/> }
        </div>
    )
}

export default Visits