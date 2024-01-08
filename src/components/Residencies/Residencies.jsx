import React from 'react'
import './Residencies.css'
import ResidenciesCard from './ResidenciesCard'


const residenciesData = [
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": "/assets/images/r1.png"
  },
  {
    "name": "Asatti Garden City",
    "price": "66,353",
    "detail": "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
    "image": "/assets/images/r2.png"
  },
  {
    "name": "Citralan Puri Serang",
    "price": "35,853",
    "detail": "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
    "image": "/assets/images/r3.png"
  },
  {
    "name": "Aliva Priva Jardin",
    "price": "47,043",
    "detail": "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
    "image": "/assets/images/r1.png"
  },
]

const Residencies = () => {
  return (
    <div className='residencies'>
        <div className="residencies-box">
          <div className="residencies-top">
            <h2 className='yellow'>Best Choices</h2>
            <h1 className='dark-blue'>Popular Residencies</h1>
          </div>
          <div className="residencies-bottom">
          {residenciesData && residenciesData.map((elem,index)=>{
            return <ResidenciesCard key={index} data={elem} />
          })}
           
          </div>
        </div>
    </div>
  )
}

export default Residencies