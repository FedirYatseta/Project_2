import React from 'react'
import man from '../../assets/imagemen.png'
import wom from '../../assets/imageWom.png'
import kid from '../../assets/kids.png'

function Section() {
    return (
        <div className="d-flex justify-content-center ">
            <div className="row section_type_male">
                <div className="col block_section_male">
                    <div className="hovereffect">
                        <img className="img-responsive" src={man} alt="" />
                        <div className="overlay">
                            <h2>Men’s</h2>
                            <a className="info" href="#section"> </a>
                        </div>
                    </div>
                    {/* <img src={man} className="img-fluid"></img>
                    <p className="d-flex justify-content-center">Men’s</p> */}
                </div>
                <div className="col">
                    <div className="col block_section_male">
                        <div className="hovereffect">
                            <img className="img-responsive" src={wom} alt="" />
                            <div className="overlay">
                                <h2>Women’s</h2>
                                <a className="info" href="#section"> </a>
                            </div>
                        </div>
                        {/* <img src={man} className="img-fluid"></img>
                    <p className="d-flex justify-content-center">Men’s</p> */}
                    </div>
                    {/* <img src={wom} className="img-fluid"></img>
                    <p className="d-flex justify-content-center">Women’s</p> */}
                </div>
                <div className="col">
                    <div className="col block_section_male">
                        <div className="hovereffect">
                            <img className="img-responsive" src={kid} alt="" />
                            <div className="overlay">
                                <h2>Kids’</h2>
                                <a className="info" href="#section"> </a>
                            </div>
                        </div>
                        {/* <img src={man} className="img-fluid"></img>
                    <p className="d-flex justify-content-center">Men’s</p> */}
                    </div>
                    {/* <img src={kid} className="img-fluid"></img>
                    <p className="d-flex justify-content-center">Kids’</p> */}
                </div>
            </div>
        </div>
    )
}

export default Section
