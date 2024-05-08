import React from 'react'
import image1 from '../assets/ladies.jpg';
import image2 from '../assets/run.jpeg';
import image3 from '../assets/tredmil.jpg';


function WhyUs() {
    return (
        <div className='reasons-container' id='reasons'>

            <h3 id='h3' style={{ textAlign: 'center', fontSize: '50px', fontWeight: 'bold' }}>Why Choose Us</h3>

            <p className='paragraph'style={{ fontWeight: 'bold', fontSize: '35px' }}>Over 50+ expert coaches</p>
            <p className='paragraph'style={{ fontWeight: 'bold', fontSize: '35px' }}>Train faster and smater than before</p>
            <p className='paragraph'style={{ fontWeight: 'bold', fontSize: '35px' }}>1 free program for a new mwmber</p>
            <p className='paragraph'style={{ fontWeight: 'bold', fontSize: '35px' }}>Reliable Partners</p> 
            
            <div className='left-r'>
                <img src={image1} alt='ladies' />
                <img src={image2} alt='run' />
                <img src={image3} alt='tredmil' />
               

            </div>
           

        </div>
    )
}

export default WhyUs