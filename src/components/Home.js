import React from 'react'
import './Home.css'
import Heart from '../../src/assets/heart.png'
import Athlete from '../../src/assets/home.png'
import Backpage from '../../src/assets/backpage.png'
import Calories from '../../src/assets/calories.png'

function Home() {
    return (
        <div className='home'>
          
        
            <div className='lefthome'>
                

                <div className='thebestclub'>
                    <div></div>
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
                        <span>+170</span>
                        <span>Expert coaches</span>
                    </div>
                    <div>
                        <span>+1322</span>
                        <span>Members Joined</span>
                    </div>
                    <div>
                        <span>+75</span>
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

                <div className='heartrate'>
                    <img src={Heart} alt='' className='' />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </div>

                <img src={Athlete} alt='' className='homeimage' />
                <img src={Backpage} alt='' className='backpage' />

                <div className='calories'>
                    <img src={Calories} alt='' />
                    <div>
                    <span>CaloriesBurnt</span>
                    <span>200 kcal</span>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Home