import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';

const Visits = () =>{

    const router = useRouter()

    const [value,setValue] = useState(new Date())

    useEffect(()=>{
        const date = {
            day: new Date(value).getDate(),
            month: new Date(value).getMonth() + 1,
            year: new Date(value).getFullYear()
        }

        router.push(`?day=${date.day}&month=${date.month}%${date.year}`)
    },[value])

    return(
        <Calendar 
            maxDetail={"month"} 
            prev2Label={false} 
            next2Label={false} 
            value={value}
            onChange={setValue}
        />
    )
}

export default Visits