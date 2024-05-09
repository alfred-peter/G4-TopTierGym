import React, { useState, useEffect } from 'react';
import './WhyUs.css';
import image1 from '../assets/ladies.jpg';
import image2 from '../assets/run.jpeg';
import image3 from '../assets/tredmil.jpg';

function WhyUs() {
    const [showCoaches, setShowCoaches] = useState(false);
    const [coachesData, setCoachesData] = useState([]);

    useEffect(() => {
        const fetchCoaches = async () => {
            try {
                const response = await fetch('http://localhost:3000/Coaches', 
                {method:'Get'});
                
                if (!response.ok) {
                    throw new Error('Failed to fetch coaches data');
                }
                const data = await response.json();
                setCoachesData(data);
            } catch (error) {
                console.error(error);
            }
        };

        if (showCoaches) {
            fetchCoaches();
        }
    }, [showCoaches]);

    const toggleCoaches = () => {
        setShowCoaches(!showCoaches);
    };

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
                <p className='paragraph'>1. Train faster and smarter than before</p>
                        <p className='paragraph'>2. 1 free program for a new member</p>
                        <p className='paragraph'>3. Reliable Partners</p>
                <p className='paragraph'>4. Over 50+ expert coaches</p>
                <button className='coaches' onClick={toggleCoaches}>
                    {showCoaches ? 'Hide Coaches' : 'See Main Coaches'}
                </button>
                {showCoaches && (
                    <>
                        {coachesData.map(coach => (
                            <div key={coach.id} className='coach-card'>
                                <p className='coach-name'>{coach.name}</p>
                                <p className='coach-quote'>{coach.quote}</p>
                                <img src={coach.image} alt={coach.name} />
                            </div>
                        ))}
                        
                    </>
                    
                )}
            </div>
        </div>
    );
}

export default WhyUs;
