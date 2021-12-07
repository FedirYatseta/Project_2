import React from 'react'
import Navbar from './Nav/Navbar'
import Offers from './Nav/Offers/Offers'

const Header = () => {
   return (
      <div>
         <div className="header">
            <Navbar />
         </div>
         <div className="special-offers-section">
            <Offers />
         </div>
      </div>
   )
}

export default Header
