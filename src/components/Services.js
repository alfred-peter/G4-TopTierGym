import React from 'react'
import './Services.css'
import {programsData} from '../ServicesData'

function Services() {
  return (
    <div className='programs' id="programs">

        <div className='programs-header'>
        <span>Services offered</span>
        </div>

        <div className='programs-categories'>
          {programsData.map ((program)=>(
            <div className='category'>
              {program.image}
              <span>{program.heading}</span>
              <span>{program.details}</span>
            </div>
          ))}
        </div>

    </div>
  )
}

export default Services