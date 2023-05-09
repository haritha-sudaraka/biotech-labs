import React from 'react'
import logo from '../../assets/logo_black.png'
import './appointment.css'
import {AppointmentForm} from '../../components'

const Appointment = ({page}) => {
  return (
    <div className='biotech__appointment section__padding'>
      <div className="biotech__appointment-logo">
        <img src={logo} alt='logo_black'/>
      </div>
      <div className="biotech__appointment-content">
        <div className="biotech__appointment-heading">
          {page==='confirm'?<h1>Thank You!</h1>:<h1>Make Your Appointment</h1>}
        </div>
        <div className="biotech__appointment-appointment_form">
          <AppointmentForm page={page}/>
        </div>
      </div>
    </div>
  )
}

export default Appointment