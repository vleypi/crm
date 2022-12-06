import { useRouter } from "next/router";
import styles from '../../styles/visits/visits.module.css'
import Info from "./Info/Info";
import Students from "./Students/Students";
import Teacher from "./Teacher/Teacher";

const Visits = () =>{

    const router = useRouter()

    return(
        <div className={styles.visits}>
            
        </div>
    )
}

export default Visits