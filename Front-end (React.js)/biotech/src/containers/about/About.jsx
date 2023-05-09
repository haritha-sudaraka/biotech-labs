import React,{useEffect} from 'react'
import './about.css'
import {AboutTag} from '../../components'
import banner from '../../assets/about_banner.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[]);
  return (
    <div data-aos='zoom-in-up' id='about' className='biotech__about section__padding'>
      <div className='biotech__about-heading'>
        <h2>About Us</h2>
      </div>

      <div className='biotech__about-content'>
        <div className='biotech__about-content_image'>
          <img src={banner} alt='about'/>
        </div>
        <div className='biotech__about-content_details'>
          <h1>Think Hard And Focus On The Patient's Well-Being</h1>
          <p>Our medical laboratory is dedicated to providing accurate and timely diagnostic testing with a focus on patient-centered care, using the latest technologies and industry best practices.</p>
          <div className='biotech__about-content_details_tags'>
            <div className='biotech__about-content_details_tags_grpA'>
              <AboutTag title='Friendly Environment'/>
              <AboutTag title='24x7 Service'/>
            </div>
            <div className='biotech__about-content_details_tags_grpB'>
              <AboutTag title='Qualified Experts'/>
              <AboutTag title='20+ Years Experience'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About