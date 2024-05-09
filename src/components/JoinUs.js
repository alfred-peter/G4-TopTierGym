import React, { useRef, useState } from 'react';
import "./JoinUs.css";
import emailjs from 'emailjs-com';
import { plansData } from './data/plansData'; 
import { ServicesData } from './data/ServicesData'; 

const JoinUs = () => {
    const form = useRef();
    const [successMessage, setSuccessMessage] = useState('');

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_dvwmlr9', 'template_xn5dl1m', form.current, 'b4_38SLhyHDZOpX9a')
            .then(
                () => {
                    console.log('SUCCESS!');
                    alert ('Your registration was successful!');
                    setSuccessMessage('Your registration was successful!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setSuccessMessage('Failed to register. Please try again.');
                }
            );
    };

    return (
        <div className='Join' id='joinus'>
            <div className='left-j'>
                <hr />
                <div>
                    <span className='stroketext'>READY TO </span>
                    <span>LEVEL UP </span>
                </div>
                <div>
                    <span>YOUR BODY </span>
                    <span className='stroketext'>WITH US?! </span>
                </div>
            </div>
            <div className='right-j'>
                <form ref={form} className='Email-container' onSubmit={sendEmail}>
                    <input type="text" name='user_name' placeholder='Your Name' />
                    <input type="email" name='user_email' placeholder='Your Email' />
                    <select name='service'>
                        {ServicesData.map((service, index) => (
                            <option key={index} value={service.heading}>{service.heading}</option>
                        ))}
                    </select>
                    <select name='payment_plan'>
                        {plansData.map((plan, index) => (
                            <option key={index} value={plan.name}>{plan.name}</option>
                        ))}
                    </select>
                    <button className='btn btn-j'>Join Now</button>
                </form>
                {successMessage && <p>{successMessage}</p>}
            </div>
        </div>
    );
};

export default JoinUs;
