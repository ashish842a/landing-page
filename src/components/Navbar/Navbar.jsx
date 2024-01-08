import React from 'react'
import './navbar.css'
import addNotification from 'react-push-notification';


const pages = ["Residencies","Our Value","Contact Us","Get Started"]


const ContactBtnClick = () => {
  addNotification({
      title: 'Welcome to Ashish React App',
      subtitle: 'Welcome to Ashish React app',
      message: 'No Contact Page is Avalaible right now',
      theme: 'darkblue',
      native: true // when using native, your OS will handle theming.
  });
};

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <img src="/assets/images/logo.png" alt="hero imag" />
        </div>
        <div className="menu-item">
            {pages && pages.map((elem,index)=>{

            return <div key={index} className="menu-list">{elem}</div>
            })}
        
        <button onClick={ContactBtnClick} className="button-9" role="button">Contact</button>
        </div>
    </div>
  )
}

export default Navbar