import React from 'react'
import image from '../../../../assets/image.png'
import arr from '../../../../assets/Line (Stroke).png'
import arl from '../../../../assets/Line (Stroke)R.png'
function Slider() {
    return (
        <div className="slider-section-custom">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={image} className="d-block w-100" alt="..." />
                        <div className="carousel-content">
                            <h2 className="text-slider-block_1" >New collection</h2>
                            <h1 className="text-slider-block_2">Menswear 2020</h1>
                            <button type="button" className="btn btn-outline-success mx-2 btn-custom"> <span className="slider-text-button">Shop sale </span> </button>
                            <button type="button" className="btn btn-success mx-2 btn-custom " > <span className="slider-text-button_two">Shop the menswear </span></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                        <div className="carousel-content">
                            <h2 className="text-slider-block_1" >New collection</h2>
                            <h1 className="text-slider-block_2">Menswear 2021</h1>
                            <button type="button" className="btn btn-outline-success mx-2 btn-custom"> <span className="slider-text-button">Shop sale </span> </button>
                            <button type="button" className="btn btn-success mx-2 btn-custom" > <span className="slider-text-button_two">Shop the menswear </span></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                    <img src={image} className="d-block w-100" alt="..." />
                        <div className="carousel-content">
                            <h2 className="text-slider-block_1" >New collection</h2>
                            <h1 className="text-slider-block_2">Menswear 2022</h1>
                            <button type="button" className="btn btn-outline-success mx-2 btn-custom"> <span className="slider-text-button">Shop sale </span> </button>
                            <button type="button" className="btn btn-success mx-2 btn-custom" > <span className="slider-text-button_two">Shop the menswear </span></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control" aria-hidden="true"> <img src={arr}  alt=""/></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control" aria-hidden="true"><img src={arl}  alt=""/></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Slider
