import React from 'react'
import './service_card.css'
import check_badge from '../../assets/check_mark_badge.png'

const ServiceCard = ({title, details}) => {
  return (
    <div className='biotech__servicecard'>
      <div className='biotech__servicecard-icon'>
        <img src={check_badge} alt='check_mark_badge'/>
      </div>
      <div className='biotech__servicecard-content'>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    </div>
  )
}

export default ServiceCard