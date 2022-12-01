import { useRouter } from "next/router";
import styles from '../../styles/visits/visits.module.css'
import Info from "./Info/Info";
import Students from "./Students/Students";
import Teacher from "./Teacher/Teacher";

const Visits = ({lesson,participants,statuses_visits,visits_users,visit_id}) =>{

    const router = useRouter()

    return(
        <div className={styles.visits}>
            <Info lesson={lesson} styles={styles}/>
            <Students participants={participants} styles={styles} statuses_visits={statuses_visits} visits_users={visits_users} visit_id={visit_id}/>
            <Teacher participants={participants} styles={styles}/>
        </div>
    )
}

export default Visits