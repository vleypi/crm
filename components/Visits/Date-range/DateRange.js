import { useRouter } from "next/router";
const DateRange = ({styles}) => {

    const router = useRouter()

    const {day,month,year} = router.query

    const date = new Date(year,month,day)

    const dateHandler = (day) =>{
        const result = new Date(date);
        result.setDate(result.getDate() + day);
        router.replace(`http://62.113.96.105:3000/crm/dashboard/visits/date?day=${result.getDate()}&month=${result.getMonth()}&year=${result.getFullYear()}`)
    }

    return (
        <div className={styles.dateRange}>
            <button onClick={()=>dateHandler(-1)} className={styles.arrow}>←</button>
            <div className={styles.date}>
                <p>{date.getDate()}.{date.getMonth()+1}.{date.getFullYear()}</p>
            </div>
            <button onClick={()=>dateHandler(1)} className={styles.arrow}>→</button>
        </div>
    )
}

export default DateRange