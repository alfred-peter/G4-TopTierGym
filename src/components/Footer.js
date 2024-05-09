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
            <a href='https://www.instagram.com/'><i class="fa-brands fa-instagram"></i></a>
            <a href="https://github.com/gitaunthama"><i class="fa-brands fa-github"></i></a>
            <a href="https://web.whatsapp.com/"><i class="fa-brands fa-whatsapp"></i></a>

            </div>
        </div>
    </footer>
  )
}

export default Footer