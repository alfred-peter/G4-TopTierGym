import React from 'react'
import './Services.css'
import { ServicesData } from './data/ServicesData'
import RightArrow from '../assets/rightArrow.png'

function Services() {
  return (
    <div className='programs' id="programs">

        <div className='programs-header'>
        <span className='stroketext'>Services </span>
          <span>offered</span>
        </div>

        <div className='programs-categories'>
          {ServicesData.map ((services)=>(
            <div className='category'>
              {services.image}
              <span>{services.heading}</span>
              <span>{services.details}</span>
              <div className='join-now'> <span>Join Now</span><img src={RightArrow} alt='arrow'></img>
              </div>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Services