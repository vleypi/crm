import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState} from '@devexpress/dx-react-scheduler';

import {
  Scheduler,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  WeekView,
  EditRecurrenceMenu,
  ConfirmationDialog,
  Resources,
  TodayButton,
  DateNavigator,
  Toolbar,
} from '@devexpress/dx-react-scheduler-material-ui';
import { styled } from '@mui/material/styles';
import {addAppointment} from '../../controllers/scheduleController/addAppointment'
import { useRouter, withRouter } from 'next/router';
import { deleteAppointment } from '../../controllers/scheduleController/deleteAppointment';
import { changeAppointment } from '../../controllers/scheduleController/changeAppointment';
import moment from 'moment';
import Link from 'next/link';
import {RRule} from 'rrule'

import dayjs, { Dayjs } from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

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
          color: 'white',
        
        }}>Открыть посещения...</a>
      </Link>
      <a style={{padding: '15px 20px 0 20px'}} href={link} target="_blank">Урок в Zoom - {link.substring(0,20)}...</a>
    </div>
  )
}

const LabelComponent = (props) =>{
  if(props.text === 'More Information'){
      return <p style={{fontWeight: 700,fontSize: 19,padding: '19px 0'}}>Описание</p>
    }
    else if(props.text === 'Repeat'){
      return <></>
    }
    else if(props.text === 'Repeat every'){
      return <></>
    }
    else if(props.text === 'week(s) on:'){
      return <></>
    }
    else if(props.text === 'day(s)'){
      return <></>
    }
    else if(props.text === 'End repeat'){
      return <p style={{fontWeight: 700,fontSize: 19}}>Конец потворения</p>
    }
    else if(props.text === 'occurrence(s)'){
      return <p style={{marginLeft: 10 }}>раз повторять</p>
    }
    else if(props.text === 'After'){
      return 
    }
    else if(props.text === 'Never'){
      return <p style={{fontWeight: 700,fontSize: 19,paddingBottom: 19}}>Никогда</p>
    }
}

const TextEditorComponent = (props) =>{

    if(props.type === 'multilineTextEditor'){
      return <AppointmentForm.TextEditor {...props} placeholder="" />
    }
    else if(props.className === "EndRepeatEditor-occurenceTextEditor"){
      return <AppointmentForm.TextEditor type='number' {...props} placeholder="" />
    }
}



const BooleanEditorComponent = (props) =>{
    if(props.label === 'Repeat'){
      return <AppointmentForm.BooleanEditor {...props} label="Повторять" />
    }
}

const SelectComponent = (props) =>{
  return <></>
}


const rRule = (date,onFieldChange) =>{

  const rule = new RRule({
    freq: RRule.WEEKLY,
    interval: 1,
    until: date.$d
  })


  onFieldChange({rRule: rule.toString()})
}

const RadioGroupComponent = (props) =>{
      const [value, setValue] = React.useState(dayjs(new Date()))

      const handleChange = (newValue) => {
        setValue(newValue);
      };
      return (
          <div style={{marginTop: 10}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Stack spacing={3}>
                  <DesktopDatePicker
                      inputFormat="DD/MM/YYYY"
                      value={value}
                      onChange={handleChange}
                      renderInput={(params) => <TextField {...params} />}
                      onAccept={(e)=>rRule(e,props.onFieldChange)}
                  />
                </Stack>
            </LocalizationProvider>
          </div>
      )
}

const ConfirmComponent = (props) =>{
  if(props.isDeleting){
    return(
      <div style={{padding: 20}}>
        <p style={{fontSize: 19}}>Вы действительно хотите удалить?</p>
        <div style={{display: 'flex',flexDirection: 'row-reverse',marginTop: '20px'}}>
          <button 
            style={{border: 'none',color: 'blue',background: 'none',fontSize: 18,cursor: 'pointer'}}
            onClick={props.handleCancel}
          >
              Нет
          </button>
          <button 
            style={{border: 'none',color: 'blue',background: 'none',margin: '0 20px',fontSize: 18,cursor: 'pointer'}}
            onClick={props.handleConfirm}
          >
            Да
          </button>
        </div>
      </div>
    )
  }
  else{
    return(
      <div style={{padding: 20}}>
        <p style={{fontSize: 19}}>Вы действительно хотите отменить изменения?</p>
        <div style={{display: 'flex',flexDirection: 'row-reverse',marginTop: '20px'}}>
          <button 
            style={{border: 'none',color: 'blue',background: 'none',fontSize: 18,cursor: 'pointer'}}
            onClick={props.handleCancel}
          >
              Нет
          </button>
          <button 
            style={{border: 'none',color: 'blue',background: 'none',margin: '0 20px',fontSize: 18,cursor: 'pointer'}}
            onClick={props.handleConfirm}
          >
            Да
          </button>
        </div>
      </div>
    )
  }
}


const EditRecurrenceMenuLayout = (props) =>{

    const commit = (type) =>{
      props.commit(type)
    }

    if(props.isDeleting){
      props.commit('all')
    }

    return(
      <div style={{padding: 20}}>
        <p style={{fontSize: 19}}>Изменить только эту дату?</p>
        <div style={{display: 'flex',justifyContent: 'center',marginTop: '20px'}}>
          <button 
            style={{border: 'none',color: 'white',background: 'none',fontSize: 18,cursor: 'pointer',background: 'blue',padding: '5px 20px',borderRadius: 5}}
            onClick={()=>commit('current')}
          >
            Да
          </button>
          <button 
            style={{border: 'none',color: 'blue',background: 'none',fontSize: 18,cursor: 'pointer',padding: '5px 20px'}}
            onClick={()=>commit('all')}
          >
            Нет
          </button>
        </div>
      </div>
    )
}

const WeeklySelect = () =>{
  return(
    <></>
  )
}

const Schedule = (props) =>{

  const router = useRouter()

  const data = props.appointments


  const [currentDate,setCurrentDate] = React.useState(new Date())

  const commitChanges = async ({ added, changed, deleted }) => {
  
    if(added){
      if(added.lesson_id ){
        await addAppointment(added)
        router.replace(router.asPath)
      }
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
      title: 'Занятия',
      allowMultiple: false,
      instances: props.lessons,
      
    }
  ]

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

  return(
    <Paper style={{position: 'absolute',top: 0, left: 0}}>
        <Scheduler
          data={data}
          height={'100%'}
          locale="ru"
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={setCurrentDate}
          />
          <EditingState
            onCommitChanges={commitChanges}
          />
          <WeekView
            startDayHour={9}
            endDayHour={23}
            dayScaleCellComponent={DayScaleCell}
          />
         
          <EditRecurrenceMenu 
              layoutComponent={EditRecurrenceMenuLayout}
          />
          
          <ConfirmationDialog
            layoutComponent={ConfirmComponent}
          />
          <Toolbar />
          <DateNavigator />
          <TodayButton />
          <Appointments />
          <Resources data={resources} />
          <AppointmentTooltip
            headerComponent={(e)=>headerComponent(e,resources[0].instances)}
            showDeleteButton
            showOpenButton
          />
          <AppointmentForm
            labelComponent={LabelComponent}
            textEditorComponent={TextEditorComponent}
            booleanEditorComponent={BooleanEditorComponent}
            selectComponent={SelectComponent}
            radioGroupComponent={RadioGroupComponent}
            weeklyRecurrenceSelectorComponent={WeeklySelect}
          />

        </Scheduler>
      </Paper>
  )
}

export default Schedule