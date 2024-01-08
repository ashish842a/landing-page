import React from 'react'
import './Contact.css'
import ContactLeft from './ContactLeft'
import ContactRight from './ContactRight'

const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-box">
        <ContactLeft />
        <ContactRight />
        </div>
    </div>
  )
}

export default Contact