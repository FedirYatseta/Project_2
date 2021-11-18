import React from 'react'
import Lang from './Lang/Lang'
import Reg from './Register/Reg'

const Topbar = () => {
    return (
        <div className="top-nav-section">
            <div className='row'>
                <a href="tel:4055550128"> Available 24/7 at  (405) 555-0128</a> 
            </div>
            <div className='row min-menu-block'>
                    <a className='col'>Delivery & returns</a>
                    <a className='col'>Track order</a>
                    <a className='col'>Blog</a>
                    <a className='col'>Contacts</a>
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
