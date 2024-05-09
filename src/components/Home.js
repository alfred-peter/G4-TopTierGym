import React from 'react'
import './Home.css'
import Heart from '../../src/assets/heart.png'
import Athlete from '../../src/assets/athlete-fotor-bg-remover-20240509173244.png'
import Backpage from '../../src/assets/backpage.png'
import Calories from '../../src/assets/calories.png'
import {motion} from 'framer-motion'
import NumberCounter from 'number-counter'



function Home() {
    const transition={type: 'spring',duration:3}
    return (
        <div className='home' id='home'>
          
        
            <div className='lefthome'>
                

                <div className='thebestclub'>
                    <motion.div 
                    initial={{left:'238px'}}
                    whileInView={{left:'8px'}} 
                    transition={transition}
                        
                    >
                    </motion.div>
                    
                    <span>The Best fitness club In Town</span>
                </div>

                <div className='gymtext'>
                    <div>
                        <span className='stroketext'>Shape  </span>
                        <span>your</span>
                    </div>

                    <div>
                        <span> Ideal Body</span>

                    </div>

                    <div className='motivationtext'>
                        <span>
                            In here you will be able to build you ideal body in the minimal time possible
                        </span>
                    </div>

                </div>
                <div className='figures'>
                    <div>
                        <span><NumberCounter end={180} start={110} delay='7' preFix="+"/></span>
                        <span>Expert coaches</span>
                    </div>
                    <div>
                        <span><NumberCounter end={1400} start={1000} delay='7' preFix="+"/></span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span><NumberCounter end={80} start={20} delay='7' preFix="+"/></span>
                        <span>Fitness Programs</span>
                    </div>

                </div>
                <div className='homebuttons'>
                    <button className='btn'>Get Started</button>
                    <button className='btn'>Learn More</button>



                </div>

            </div>
            <div className='righthome'>
                <button className='btn'> Join Now</button>

                <motion.div
                initial={{right:'-1rem'}}
                whileInView={{right:'4rem'}}
                transition={transition}
                className='heartrate'>
                    <img src={Heart} alt='' className='' />
                    <span>Heart Rate</span>
                    <span><NumberCounter end={114} start={20} delay='7' suffic="bpm" /></span>
                </motion.div>

                <img src={Athlete} alt='' className='homeimage' />
                <img src={Backpage} alt='' className='backpage' />

                <motion.div className='calories'
                initial={{right:'37rem'}}
                whileInView={{right:'88rem'}}
                transition={transition}>
                    <img src={Calories} alt='' />
                    <div>
                    <span>CaloriesBurnt</span>
                    <span>200 kcal</span>
                    </div>
                </motion.div>



            </div>
        </div>
    )
}

export default Home