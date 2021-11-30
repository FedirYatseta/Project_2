import React, { useState, useRef } from 'react'
import filter from "../../../assets/Vector_btn.png"
import { useSpring, animated } from "react-spring"
function Women() {

    const [open, toggle] = useState(false)
    const {x,rotate} = useSpring({
        from: { x: 1, rotate: '180deg' },
        x: open ? 1 : 0,
        config: { duration: 1000 },
        // x: open ? 1 : 0,
        // config:{ duration: 200 },

    })

    return (
        <div className="container overflow-hidden">
            <div className="row gx-5">
                <div className="col-3 mt-2">
                    <div className="d-grid gap-2 ">
                        <button type="button" className="btn style-button-filter"> <img src={filter} /> Hide filters</button>
                    </div>
                </div>
                <div className="col-9 mt-2">
                    <div className='d-flex align-items-center justify-content-between'>
                        <div className='d-flex align-items-center'>
                            <div className='mx-2 title-sort-item'>Sorty By</div>
                            <div className="dropdown">
                                <button className="dropdown sort-button-style text-start ps-3" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    popularity
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="#">popularity</a></li>
                                    <li><a className="dropdown-item" href="#">new</a></li>
                                    <li><a className="dropdown-item" href="#">rich</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className='mx-2 title-sort-item'>Show</div>
                            <div className=''>
                                <input type="number" id="typeNumber" className="show-custom-style-input" />
                                <label className="" htmlFor="typeNumber"></label>
                            </div>
                            <div className='mx-2 sub-text-item'>products per page</div>
                        </div>
                        <div className="d-flex align-items-center">
                            <nav aria-label="Page navigation example">
                                <ul className="pagination d-flex justify-content-end align-items-center">
                                    <li className="page-item disabled">
                                        <a className="page-link">Previous</a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="">
                        <div className="">
                            <p className="d-grid gap-2">
                                <button
                                    className="btn text-start c-s-b"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseClothes"
                                    aria-expanded="false"
                                    aria-controls="collapseClothes"
                                    onClick={() => toggle(!open)}>
                                    Clothes
                                    <animated.span style={{
                                        opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
                                        scale: x.to({
                                            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                                        }),
                                        transform: rotate.to({range: [0, 360], output: [0, 90] } )
                                    }
                                    } 
                                   >

                                </animated.span>

                                <animated.span >
                                </animated.span>

                            </button>
                        </p>
                        <div className="collapse" id="collapseClothes">
                            <form className="form-group">
                                <ul className="list-group">
                                    <li className="my-1">
                                        <input className="mx-auto form-control" type="search" placeholder="Search" aria-label="Search" />
                                    </li>
                                    <li className="my-1" >
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                            Coats (16)
                                        </label>
                                    </li>
                                    <li className="my-1">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                            Coats (16)
                                        </label>
                                    </li>
                                    <li className="my-1"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                            Coats (16)
                                        </label>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                    {/* <div className='my-4'>
                            <p className="d-grid gap-2">
                            <button className="btn text-start c-s-b" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSize" aria-expanded="false" aria-controls="collapseSize" onClick={() => setAnimationActive2(!animationActive2)}>
                                    Size
                                    <Spring
                                        immediate={!myRef2.current}
                                        reset={true}
                                        from={{  transform: "rotate(0deg)" }}
                                        to={{  transform: "rotate(180deg)" }}
                                        config={{ duration: 200 }}
                                        reverse={!animationActive2}>
                                        {styles => (
                                            <animated.span style={styles}  ref={myRef2}>
                                            </animated.span>
                                        )}
                                    </Spring>
                                    <Spring
                                        immediate={!myRef2.current}
                                        reset={true}
                                        from={{ transform: "rotate(0deg)" }}
                                        to={{ transform: "rotate(90deg)" }}
                                        config={{ duration: 200 }}
                                        reverse={!animationActive2}>
                                        {styles => (
                                            <animated.span style={styles}  ref={myRef2}>
                                            </animated.span>
                                        )}
                                    </Spring>
                                </button>
                            </p>
                            <div className="collapse" id="collapseSize">
                                <form className="form-group">
                                    <ul className="list-group">
                                        <li className="my-1">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                                Coats (16)
                                            </label>
                                        </li>
                                        <li className="my-1">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                                Coats (16)
                                            </label>
                                        </li>
                                        <li className="my-1">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                            <label className="form-check-label mx-1" htmlFor="flexCheckDefault">
                                                Coats (16)
                                            </label>
                                        </li>
                                    </ul>
                                </form>
                            </div>
                        </div> */}
                </div>
            </div>
            <div className="col-9">
                <div>Element</div>
            </div>
        </div>
        </div >
    )
}

export default Women
