import { useRouter } from "next/router"

const Info = ({styles,lesson}) =>{

    const router = useRouter()

    const {year,month,day} = router.query

    const date = new Date(year,month,day).toLocaleDateString()

    return(
        <div className={styles.info}>
            <p>{lesson.lesson_name}</p>
            <p>{date}</p>
        </div>
    )
}

export default Info