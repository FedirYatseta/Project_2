import React from 'react'
import cap from '../../assets/cap.png'

function Arrivals() {
    return (
        <div className="arrivals-section">
            <div className="row">
                <h1 className=" d-flex justify-content-center align-item-center my-5">New arrivals</h1>
                <h6 className=" d-flex justify-content-center align-item-center my-4"> Check out our latest arrivals htmlFor the upcoming season
                    See the collection here</h6>
                <div className="slider_arrivals">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators d-flex justify-content-start">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active " aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="d-flex">
                                    <div className="mx-2">

                                        {/* <img src={cap} className="slider-img-arrival" alt="..." />
                                        <p>Black and white sport cap</p>
                                        <p>$18.15</p> */}
                                    </div>
                                    <div className="mx-2">
                                        <img src={cap} className="slider-img-arrival" alt="..." />
                                        <p>Black and white sport cap</p>
                                        <p>$18.15</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Arrivals
