import React from 'react';
import "./Plans.css";
import { plansData } from "../components/data/plansData";
import whiteTick from "../assets/tick.jpeg";

const Plans = () => {
  const handleJoinNow = (planName) => {
    alert(`You have selected the ${planName} plan. WELCOME!`);
  };

  return (
    <div className='Plans-container' id='plans'>
      <div className='Heading' style={{ gap: "6rem" }}>
        <span className='stroke-text'>READY TO BEGIN   </span>
        <span>YOUR JOURNEY </span>
        <span className='stroke-text'>NOW WITH US </span>
      </div>
      {/* Plans Card */}
      <div className='plans'>
        {plansData.map((plans, i) => (
          <div className='plan' key={i}>
            {plans.icon}
            <span>{plans.name}</span>
            <span>${plans.price}</span>
            <div className='Features'>
              {plans.features.map((features, i) => (
                <div className='feature' key={i}>
                  <img src={whiteTick} alt="" />
                  <span>{features}</span>
                </div>
              ))}
            </div>
            <div>
              <button className='btn' onClick={() => handleJoinNow(plans.name)}>Join Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
