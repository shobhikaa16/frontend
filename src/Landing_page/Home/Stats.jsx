import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Stats() {
  return (
    <div className='container '>
      <div className='row p-5'>
        <div className='col-6 mt-5 p-5'>
          <h1>Trust with confidence</h1>
          <div className='mt-5 space-x-8'>
            <h4>Customer-first always</h4>
            <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% 
              of daily retail exchange volumes in India.</p>

              <h4>No spam or gimmicks</h4>
            <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps 
              that you use at your pace, the way you like.</p>

              <h4>The Zerodha universe</h4>
            <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you 
              tailored services specific to your needs.</p>

              <h4>Do better with money</h4>
            <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you
               do better with your money.</p>
          </div>
        </div>
        <div className='col-6 '>
          <img src="images/ecosystem.png"/>
          <div className='space-x-8' ms-5>
          <a href="" className='ms-5' style={{textDecoration:"none"}}>Explore our products <FontAwesomeIcon icon={faArrowRight} /></a>
          <a href=""style={{textDecoration:"none"}}>Try kite demo <FontAwesomeIcon icon={faArrowRight} /></a>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats