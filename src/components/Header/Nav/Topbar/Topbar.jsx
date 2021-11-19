import React from 'react'
import Lang from './Lang/Lang'
import Reg from './Register/Reg'

const Topbar = () => {
    return (
        <div className="top-nav-section">
            <div className='row'>
                <a href="tel:4055550128" className="text-light text-decoration-none"> Available 24/7 at  (405) 555-0128</a> 
            </div>
            <div className='row min-menu-block'>
                    <a href="#" className='col text-light text-decoration-none'>Delivery & returns</a>
                    <a href="#" className='col text-light text-decoration-none'>Track order</a>
                    <a href="#" className='col text-light text-decoration-none'>Blog</a>
                    <a href="#" className='col text-light text-decoration-none'>Contacts</a>
            </div>
            <div className='row'>
                <Lang />
            </div>
            <div className='row'>
                <Reg />
            </div>
        </div>
    )
}

export default Topbar
