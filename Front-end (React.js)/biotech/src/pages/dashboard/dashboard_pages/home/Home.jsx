import React,{useEffect,useState} from 'react'
import './home.css'
import LiveClockUpdate from '../../components/LiveClockUpdate'
import {FaVials,FaMicroscope} from 'react-icons/fa'
import {BsFillClipboard2PulseFill, BsClipboard2CheckFill} from 'react-icons/bs'
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
import axios from 'axios'

const StatusCard = (icon, title, description) => {
  return (
    <>
      <div className="biotech__dashboard-status_card">
        {icon}
        <div className="biotech__dashboard-status_card-description">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </>
      
  )
}

const Home = () => {

  useEffect(()=>{
    axios.get("http://localhost:8080/totalReports")
    .then((res)=>{setReportCount(res.data)})
    .catch((err)=>console.log(err))

    axios.get("http://localhost:8080/totalMedicalTests")
    .then((res)=>{setTestCount(res.data)})
    .catch((err)=>console.log(err))

    axios.get("http://localhost:8080/totalAppointments/Pending")
    .then((res)=>{setAppointmentsRemaining(res.data)})
    .catch((err)=>console.log(err))

    axios.get("http://localhost:8080/totalAppointments/Visited")
    .then((res)=>{setAppointmentsDone(res.data)})
    .catch((err)=>console.log(err))
  })

  const [reportCount,setReportCount] = useState();
  const [testCount,setTestCount] = useState();
  const [appointmentsRemaining,setAppointmentsRemaining] = useState();
  const [appointmentsDone,setAppointmentsDone] = useState();

  return (
    <div className='biotech__dashboard_home'>
      <div>
        {StatusCard(<FaVials style={{color:'#FF007A'}} className='text-4xl'/>,`${reportCount} Total`,'Reports Done')}
        {StatusCard(<FaMicroscope style={{color:'#008294'}} className='text-4xl'/>,`${testCount} Total`,'Test Types Available')}
        {StatusCard(<BsFillClipboard2PulseFill style={{color:'#FF007A'}} className='text-4xl'/>,`${appointmentsRemaining} Total`,'Appointments Remaining')}
        {StatusCard(<BsClipboard2CheckFill style={{color:'#FF007A'}} className='text-4xl'/>,`${appointmentsDone} Total`,'Appointments Done')}
      </div>
      <div className='time_date_sect'>
        <CalendarComponent id="calendar"/>
        <LiveClockUpdate/>
      </div>
      
    </div>
  )
}

export default Home