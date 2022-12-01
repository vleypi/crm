import { useRouter } from "next/router";
import styles from '../../styles/visits/visits.module.css'
import Info from "./Info/Info";
import Students from "./Students/Students";
import Teacher from "./Teacher/Teacher";

const Visits = ({lesson,participants}) =>{

    const router = useRouter()

    return(
        <div className={styles.visits}>
            <Info lesson={lesson} styles={styles}/>
            <Students participants={participants} styles={styles}/>
            <Teacher participants={participants} styles={styles}/>
        </div>
    )
}

export default Visits