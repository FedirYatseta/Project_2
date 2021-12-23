import React from 'react'
import logo from '../../../../assets/logo.png'
import {BrowserRouter as Router, Link } from 'react-router-dom';

function Menu() {
    return (
       
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand" ><img src={logo} alt="logo" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2-left">
                                <Link to="/women" className="nav-link active" aria-current="page">Women</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/men" className="nav-link" >Men</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link  to="/girls" className="nav-link " >Girls</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link  to="/boys" className="nav-link " >Boys</Link>
                            </li>
                            <li className="nav-item px-2">
                                <Link to="/sale" className="nav-link ">Sale</Link>
                            </li>
                        </ul>
                        <form className="d-flex px-3 input-search-field">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        </form>
                        <form className="d-flex">
                            <i className="fas fa-shopping-cart px-3">1</i>
                            <i className="far fa-heart px-3">2</i>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Menu
