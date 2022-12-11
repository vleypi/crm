import { useRouter } from 'next/router'
import React from 'react'

const Appointments = ({styles,appointments}) => {

    const router = useRouter()

    const routerHandler = (appointment) =>{
        router.push(`/crm/dashboard/visits/date?day=${router.query.day}&month=${router.query.month}&year=${router.query.year}&appointment_id=${appointment.id}`)
    }

    return (
        <>
            {appointments.length ? 
                <div className={styles.appointments}>
                    {appointments.map((appointment)=>(
                        <div className={styles.appointment} onClick={()=>routerHandler(appointment)}>
                            <div className={styles.startDate}>{String(new Date(appointment.startDate).getHours()).padStart(2, '0') + ":" + String(new Date(appointment.startDate).getMinutes()).padStart(2, '0')}</div>
                            <div className={styles.lesson_name}>{appointment.lesson_name}</div>
                        </div>
                    ))}
                </div> :
                <div className={styles.appointments}>
                    <div className={styles.noAppointments}>Нет занятий на эту дату</div>
                </div>
            }   
        </>
    )
}

export default Appointments