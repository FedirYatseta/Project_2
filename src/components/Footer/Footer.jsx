import React from 'react'
import apple from '../../assets/app-store.png'
import android from '../../assets/Vector.png'
import ScrollButton from './ScrollButton'

function Footer() {


    return (
        <div className="footer-section">
            <div className="container col">
                <div className="row d-flex justify-content-between">
                    <div className="col me-5 my-5">
                        <h4 className="footer-title-list">HELP</h4>
                        <ul className="list-group">
                            <li ><a href="#section" className="text-decoration-none">Delivery & returns</a></li>
                            <li ><a href="#section" className="text-decoration-none">FAQ</a></li>
                            <li ><a href="#section" className="text-decoration-none">Track order</a></li>
                            <li ><a href="#section" className="text-decoration-none">Contacts</a></li>
                            <li ><a href="#section" className="text-decoration-none">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col mx-5 my-5">
                        <h4 className="footer-title-list">Shop</h4>
                        <ul className="list-group">
                            <li><a href="#section">New arrivals</a></li>
                            <li><a href="#section">Trending now</a></li>
                            <li><a href="#section">Sales</a></li>
                            <li><a href="#section">Brands</a></li>
                        </ul>
                    </div>
                    <div className="col mx-5 my-5">
                        <h4 className="footer-title-list">Get in touch</h4>
                        <ul className="list-group">
                            <li>
                                <a href="tel:4055550128" > Call: (405) 555-0128 </a>
                            </li>
                            <li>
                                <a href="mail:hello@createx.com" >Email: hello@createx.com</a>
                            </li>
                        </ul>
                        <div className="footer-icon-block my-4">
                            <i className="fab fa-instagram px-2 py-2 me-2 footer-icon-item"></i>
                            <i className="fab fa-facebook px-2 py-2 me-2 footer-icon-item"></i>
                            <i className="fab fa-twitter px-2 py-2 me-2 footer-icon-item"></i>
                            <i className="fab fa-youtube px-2 py-2 me-2 footer-icon-item"></i>
                            <i className="fab fa-pinterest px-2 py-2  footer-icon-item"></i>
                        </div>
                    </div>
                    <div className="col ms-5 my-5">
                        <h4 className="footer-title-list">Download our app</h4>
                        <div className="d-flex">
                            <img src={apple} alt="apple" className="me-2 my-1"></img>
                            <img src={android} alt="android" className="mx-1 my-1"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="footer-line"></div>
            </div>
            <div className="container d-flex my-4 ">
                <div className="col d-flex justify-content-start">© All rights reserved. Made with by Createx Studio </div>
                <div className="col d-flex justify-content-end">
                    <ScrollButton />
                </div>
            </div>
        </div>
    )
}

export default Footer
