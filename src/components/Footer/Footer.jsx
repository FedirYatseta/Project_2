import React from 'react'
import apple from '../../assets/app-store.png'
import android from '../../assets/Vector.png'
import ScrollButton from './ScrollButton'

function Footer() {


    return (
        <div className="footer-section  ">
            <div className="col d-flex justify-content-center">
                <div className="row">
                    <div className="col mx-5 my-5">
                        <h4 className="footer-title-list">HELP</h4>
                        <ul className="list-group">
                            <li ><a href="" className="text-decoration-none">Delivery & returns</a></li>
                            <li ><a href="" className="text-decoration-none">FAQ</a></li>
                            <li ><a href="" className="text-decoration-none">Track order</a></li>
                            <li ><a href="" className="text-decoration-none">Contacts</a></li>
                            <li ><a href="" className="text-decoration-none">Blog</a></li>
                        </ul>
                    </div>
                    <div className="col mx-5 my-5">
                        <h4 className="footer-title-list">Shop</h4>
                        <ul className="list-group">
                            <li><a href="">New arrivals</a></li>
                            <li><a href="">Trending now</a></li>
                            <li><a href="">Sales</a></li>
                            <li><a href="">Brands</a></li>
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
                        <div className="footer-icon-block">
                            <i className="fab fa-instagram px-2 py-2 mx-1 footer-icon-item"></i>
                            <i className="fab fa-facebook px-2 py-2 mx-1 footer-icon-item"></i>
                            <i className="fab fa-twitter px-2 py-2 mx-1 footer-icon-item"></i>
                            <i className="fab fa-youtube px-2 py-2 mx-1 footer-icon-item"></i>
                            <i className="fab fa-pinterest px-2 py-2 mx-1 footer-icon-item"></i>
                        </div>
                    </div>
                    <div className="col mx-5 my-5">
                        <h4 className="footer-title-list">Download our app</h4>
                        <div className="d-flex">
                            <img src={apple} className="mx-1 my-1"></img>
                            <img src={android} className="mx-1 my-1"></img>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="footer-line"></div>
            </div>
            <div className="row my-4">
                <div className="col d-flex justify-content-center">© All rights reserved. Made with by Createx Studio </div>
                <div className="col d-flex justify-content-center">
                    <ScrollButton />
                </div>
            </div>
        </div>
    )
}

export default Footer
