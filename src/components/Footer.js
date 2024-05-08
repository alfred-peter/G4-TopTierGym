import React from 'react'
import  "./Footer.css"
const Footer = () => {
  return (
    <footer id='footer'>
       

        <div className="midFooter">
            <h1>TopTier Physical Training </h1>
            <p>In Here We will help you to Shape and Build Your Ideal Body and Be confident</p>
            
        </div>

        <div className="rightFooter">
            <h4>Follow Us:</h4>
            <div className="icons">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-github"></i>
            <i class="fa-brands fa-whatsapp"></i>

            </div>
        </div>
    </footer>
  )
}

export default Footer