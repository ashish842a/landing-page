import React from 'react'
import '../Footer/Footer.css'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'


const Footer = () => {
  return (
    <>
      <div className="footer">
        <FooterLeft />
        <FooterRight />
      </div>
    </>
  )
}

export default Footer