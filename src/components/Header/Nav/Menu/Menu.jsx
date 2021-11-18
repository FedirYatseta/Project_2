import React from 'react'
import { Nav, Navbar, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import logo from '../../../../assets/logo.png'

function Menu() {
    return (

        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-none">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item px-2-left">
                                <a className="nav-link active" aria-current="page" href="#">Women</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#">Man</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link " href="#">Girls</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link " href="#">Boys</a>
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link " href="#">Sale</a>
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


        // <div className="row">
        //     <div className="col">
        //         <img src={logo}></img>
        //     </div>
        //     <div className="col">
        //         <nav className="">
        //             <a href="https://#" >Women</a>
        //             <a href="https://#" className="mx-1">Men</a>
        //             <a href="https://#" className="mx-1">Girls</a>
        //             <a href="https://#" className="mx-1">Boys</a>
        //             <a href="https://#" className="mx-1">Sale</a>
        //         </nav>
        //     </div>
        //     <div className="col">
        //         <input type="text" placeholder="search for Products"></input>
        //     </div>
        //     <div className="col">
        //         <i className="fas fa-shopping-cart"></i>
        //         <i className="far fa-heart"></i>
        //     </div>
        // </div>
    )
}

export default Menu
