import React,{useEffect} from 'react'
import './features.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Features = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);

  return (
    <div data-aos="zoom-in-up" className='biotech__features'>
      <div className='biotech__features-feature1'>
        <h3>10,000+</h3>
        <p>Succesful Tests</p>
      </div>
      <div className='biotech__features-feature2'>
        <h3>70+</h3>
        <p>Well Experienced Staff</p>
      </div>
      <div className='biotech__features-feature3'>
        <p>Using Latest Technologies</p>
      </div>
      <div className='biotech__features-feature4'>
        <h3>50+</h3>
        <p>Lab Experts</p>
      </div>
    </div>
  )
}

export default Features