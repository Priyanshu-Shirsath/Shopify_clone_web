import React from 'react'
import './Offer.css'
import exclusive from '../../assets/exclu.webp'


const Offer = () => {
  return (
    <div className='Offers'>
       <div className="Offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY FOR BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
       </div>
       <div className="Offers-right">
        <img src={exclusive} alt="" />
       </div>
    </div>
  )
}

export default Offer
