import React from 'react'
import Topbar from './Topbar/Topbar'
import Menu from './Menu/Menu'

const Navbar = () => {
    return (
        <div className="navbar-section">
            <div className="top-navbar-block">
                <React.StrictMode>
                    <Topbar />
                </React.StrictMode>
            </div>
            <div className="navbar-block">
                <Menu />
            </div>
        </div>
    )
}

export default Navbar
