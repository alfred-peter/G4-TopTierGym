import React from 'react'
import './WhyUs.css'
import image1 from '../assets/ladies.jpg';
import image2 from '../assets/run.jpeg';
import image3 from '../assets/tredmil.jpg';


function WhyUs() {
    return (
        <div className='reasons-container' id='whyus'>
              
            <div className='left-r'>
                <img src={image1} alt='ladies' />
                <img src={image2} alt='run' />
                <img src={image3} alt='tredmil' />
                <img src={image1} alt='ladies' />
               

            </div>
           <div className='right-r'>
               <h3 className='stroketext'>Why Choose Us</h3> 

             <p className='paragraph'> 1. Over 50+ expert coaches</p>
            <p className='paragraph'> 2. Train faster and smater than before</p>
            <p className='paragraph'> 3. 1 free program for a new member</p>
            <p className='paragraph'> 4. Reliable Partners</p>  
           </div>

        </div>
    )
}

export default WhyUs