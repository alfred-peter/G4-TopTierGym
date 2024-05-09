import React, { useState } from 'react';
import './Services.css';
import { ServicesData } from './data/ServicesData';
import RightArrow from '../assets/rightArrow.png';

function Services() {
  const [ ,setSelectedService] = useState(null);

  const handleJoinNow = (service) => {
    setSelectedService(service);
    alert(`You have selected "${service.heading}" service.`);
  };

  return (
    <div className='programs' id="services">
      <div className='programs-header'>
        <span className='stroketext'>Services </span>
        <span>Offered</span>
      </div>

      <div className='programs-categories'>
        {ServicesData.map((service) => (
          <div className='category' key={service.id}>
            {service.image}
            <span>{service.heading}</span>
            <span>{service.details}</span>
            <div className='join-now' onClick={() => handleJoinNow(service)}>
              <span><button className='service-btn'>Join Now</button></span>
              <img src={RightArrow} alt='arrow' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
