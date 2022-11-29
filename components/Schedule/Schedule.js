import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  AllDayPanel,
  ConfirmationDialog,
  Resources,
} from '@devexpress/dx-react-scheduler-material-ui';

import {addAppointment} from '../../controllers/scheduleController/addAppointment'
import { useRouter, withRouter } from 'next/router';
import { deleteAppointment } from '../../controllers/scheduleController/deleteAppointment';
import { changeAppointment } from '../../controllers/scheduleController/changeAppointment';

import Link from 'next/link';

const headerComponent = (props,lessons) =>{

  const link = lessons.find(lesson=>lesson.id == props.appointmentData.lesson_id).lesson_link

  return(
    <div style={{display: 'flex',flexDirection: 'column'}}>
      <Link href="/">
        <a style={{
          width: '100%',
          background: lessons.find(lesson=>lesson.id == props.appointmentData.lesson_id).color,
          display: 'flex',
          justifyContent: 'center',
          height: '40px',
          alignItems: 'center',
          color: 'white'
        }}>Открыть</a>
      </Link>
      <a style={{padding: '15px 20px 0 20px'}} href={link} target="_blank">Урок в Zoom - {link.substring(0,20)}...</a>
    </div>
  )
}

const Schedule = (props) =>{

  const router = useRouter()

  const data = props.appointments

  const currentDate = new Date()

  const commitChanges = async ({ added, changed, deleted }) => {

    if(added){
      await addAppointment(added)
      router.replace(router.asPath)
    }

    else if(changed){
      const appointment_id = Object.keys(changed)[0]
      const changes = changed[appointment_id]
      await changeAppointment(changes,appointment_id)
      router.replace(router.asPath)
    }

    else if(deleted){
      await deleteAppointment(deleted)
      router.replace(router.asPath)
    }
  }

  const resources = [
    {
      id: 0,
      fieldName: 'lesson_id',
      title: 'Lessons',
      allowMultiple: false,
      instances: props.lessons,
      
    }
  ]

  return(
    <Paper style={{position: 'absolute',top: 0, left: 0}}>
        <Scheduler
          data={data}
          height={960}
        >
          <ViewState
            currentDate={currentDate}
          />
          
          <EditingState
            onCommitChanges={commitChanges}
            
          />
          <WeekView
            startDayHour={9}
            endDayHour={23}
          />
          <AllDayPanel />
          <EditRecurrenceMenu />
          <ConfirmationDialog />
          <Appointments />
          <Resources data={resources} />
          <AppointmentTooltip
            headerComponent={(e)=>headerComponent(e,resources[0].instances)}
            showDeleteButton
            showOpenButton
          />
          <AppointmentForm />
        </Scheduler>
      </Paper>
  )
}

export default Schedule