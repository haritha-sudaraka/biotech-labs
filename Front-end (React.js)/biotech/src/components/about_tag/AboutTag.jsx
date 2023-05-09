import React from 'react'
import './about_tag.css'
import check from '../../assets/check_mark.png'

const AboutTag = ({title}) => {
  return (
    <div className='biotech__abouttag-container'>
      <img src={check} alt='check_mark'/>
      <p>{title}</p>
    </div>
  )
}

export default AboutTag