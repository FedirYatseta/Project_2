import React from 'react'
import sub from '../../assets/subscribe.png'

function Subscribe() {
    return (
        <div className='bg-custom'>
            <div className="container">
                <div className="row">
                    <div className="col my-auto">
                        <div className="my-2">
                            <h2>Subscribe for updates</h2>
                        </div>
                        <div className="my-4">
                            <h5>Subscribe for exclusive early sale access and new arrivals.</h5>
                        </div>
                        <div className="my-4">
                            <button className="btn btn-outline-success me-1">Women</button>
                            <button className="btn btn-outline-success mx-2">Men</button>
                            <button className="btn btn-outline-success mx-2">Girls</button>
                            <button className="btn btn-outline-success mx-2">Boys</button>
                        </div>
                        <div className="row">
                            <span>Email</span>
                            <div className="input-group my-3 ">
                                <input type="text" className="form-control" placeholder="Your working email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Subscribe</button>
                            </div>
                        </div>

                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck" />
                                <label className="form-check-label" htmlFor="gridCheck">
                                    I agree to receive communications from Createx Store.
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center my-5">
                            <img className="" src={sub} alt="sub"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Subscribe
