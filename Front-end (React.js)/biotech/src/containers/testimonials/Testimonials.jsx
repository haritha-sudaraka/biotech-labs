import React,{useEffect} from 'react'
import './testimonials.css'
import {Carousel} from '../../components'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Testimonials = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div data-aos='zoom-in-up' id='testimonials' className='biotech__testimonials section__padding'>
      <h2>Testimonials</h2>
      <h1>The Main Reason For Your Choice Is Our Best Service</h1>
      <div className='biotech__testimonials-carousel'>
        <Carousel/>
      </div>
    </div>
  )
}

export default Testimonials