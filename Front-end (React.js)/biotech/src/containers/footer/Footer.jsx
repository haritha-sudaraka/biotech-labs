import React from 'react'
import './footer.css'
import logo_white from '../../assets/logo_white.png'
import { fb,ig,linkedin,twitter } from '../../assets/social'

const Footer = () => {

  const Social = () => (
    <>
      <a rel="noreferrer" target='_blank' href='https://www.facebook.com/'><img src={fb} alt='social'/></a>
      <a rel="noreferrer" target='_blank' href='https://www.instagram.com/'><img src={ig} alt='social'/></a>
      <a rel="noreferrer" target='_blank' href='https://www.linkedin.com/'><img src={linkedin} alt='social'/></a>
      <a rel="noreferrer" target='_blank' href='https://www.twitter.com/'><img src={twitter} alt='social'/></a>
    </>
  )

  return (
    <div id='footer' className='biotech__footer section__padding'>
      <div className="biotech__footer-content">
        <div className="biotech__footer-content_logosect">
          <img src={logo_white} alt='logo_white'/>
          <div className='biotech__footer-content_logosect-social'>
            <Social/>
          </div>
        </div>

        <div className="biotech__footer-content_linksect">
          <div className="biotech__footer-content_linksect-company">
            <h5>Company</h5>
            <p>Home</p>
            <p>About Us</p>
            <p>Services</p>
            <p>Contact Us</p>
          </div>
          <div className="biotech__footer-content_linksect-official">
            <h5>Official Info</h5>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="biotech__footer-content_linksect-contact">
            <h5>Contact Us</h5>
            <p>124/A, Maradana Road,<br/>Colombo 07</p>
            <p>033 123 4567</p>
            <p>biotech@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="biotech__footer-copy">
        <p>© 2023 BioTechLabs. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer