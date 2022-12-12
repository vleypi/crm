import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  Appointments,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  Resources,
  TodayButton,
  DateNavigator,
  Toolbar
} from '@devexpress/dx-react-scheduler-material-ui';
import { styled } from '@mui/material/styles';
import moment from 'moment';
import Link from 'next/link';

const headerComponent = (props,lessons) =>{

  const {lesson_id,endDate} = props.appointmentData

  const link = lessons.find(lesson=>lesson.id == lesson_id).lesson_link

  const date = new Date(endDate)
  
  return(
    <div style={{display: 'flex',flexDirection: 'column'}}>
      <Link href={`/crm/dashboard/schedule/visits?lesson_id=${lesson_id}&day=${date.getDate()}&month=${date.getMonth()}&year=${date.getFullYear()}`}>
        <a style={{
          width: '100%',
          background: lessons.find(lesson=>lesson.id == props.appointmentData.lesson_id).color,
          display: 'flex',
          justifyContent: 'center',
          height: '40px',
          alignItems: 'center',
          color: 'white'
        }}>Открыть посещения...</a>
      </Link>
      <a style={{padding: '15px 20px 0 20px'}} href={link} target="_blank">Урок в Zoom - {link.substring(0,20)}...</a>
    </div>
  )
}

const PREFIX = 'Demo';

const classes = {
  dayScaleCell: `${PREFIX}-dayScaleCell`,
};

const formatDayScaleDate = (date, options) => {
  const momentDate = moment(date);
  const { weekday } = options;
  return momentDate.format(weekday ? 'dddd' : 'D');
};

const StyledWeekViewDayScaleCell = styled(WeekView.DayScaleCell)({
  [`&.${classes.dayScaleCell}`]: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
});

const DayScaleCell = ((
  { formatDate, ...restProps },
) => (
  <StyledWeekViewDayScaleCell
    {...restProps}
    formatDate={formatDayScaleDate}
    className={classes.dayScaleCell}
  />
));

const ButtonComponent = (props) =>{
  return(
     <button onClick={props.setCurrentDate} style={{padding: '10px 20px',fontSize: 16,background: 'none',cursor: 'pointer',border: '1px #1976d2 solid',color: '#1976d2'}}>Сегодня</button>
  )
}


const Schedule = (props) =>{

  const resources = [
    {
      id: 0,
      fieldName: 'lesson_id',
      title: 'Занятия',
      allowMultiple: false,
      instances: props.lessons,
      
    }
  ]
  const data = props.appointments

  const [currentDate,setCurrentDate] = React.useState(new Date())


  return(
    <Paper style={{marginTop: 35}}>
        <Scheduler
          data={data}
          height={'100%'}
          locale="ru"
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={setCurrentDate}
          />
          <WeekView
            startDayHour={9}
            endDayHour={23}
           
          /> 
          <Toolbar />
          <DateNavigator />
          <TodayButton buttonComponent={ButtonComponent}/>
          <Appointments />
          <Resources data={resources} />
          <AppointmentTooltip
            headerComponent={(e)=>headerComponent(e,resources[0].instances)}
          />
        </Scheduler>
      </Paper>
  )
}

export default Schedule