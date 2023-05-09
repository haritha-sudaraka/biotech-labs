import React,{useEffect} from 'react'
import './services.css'
import banner from '../../assets/services_banner.png'
import {ServiceCard} from '../../components'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Services = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div data-aos='zoom-in-up' id='services' className='biotech__services section__padding'>
      <div className='biotech__services-heading'>
        <h2>Our Services</h2>
      </div>
      <div className='biotech__services-content'>
        <div className='biotech__services-content_details'>
          <ServiceCard title='Blood Tests' details='FBC, Blood Grouping and Rhesus, Lipid Profile, Clotting Profile'/>
          <ServiceCard title='Appointment Visits' details='You can make an appointment through our website and manage your time.'/>
          <ServiceCard title='Urine Tests' details='Red Blood Cell, Glucose, Protein, Urine pH Level, Ketones, Bilirubin'/>
          <ServiceCard title='Blood Pressure, Weight' details='You can checkup your blood pressure, BMI rate and meet consultants.'/>
        </div>
        <div className='biotech__services-content_banner'>
          <img src={banner} alt='services_banner'/>
        </div>
      </div>
    </div>
  )
}

export default Services