import React from 'react'
import FooterImage from '/assets/images/logo2.png'
const FooterLeft = () => {
  return (
   <>
    <div className="footer-left">
    <div className="logo">
      <img src={FooterImage} alt="Footer image" />
    </div>
    <div className="text para">
    Our vision is to make all people <br />
the best place to live for them.
    </div>
    </div>
   </>
  )
}

export default FooterLeft