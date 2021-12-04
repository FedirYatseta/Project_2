import React from 'react'
import filter from "../../../assets/Vector_btn.png"
import AnimButton from '../../Button/AnimButton'
function Women() {


    return (
        <div className="container overflow-hidden">
            <div className="row gx-5">
                <div className="col-3 mt-2">
                    <div className="d-grid gap-2 ">
                        <button type="button" className="btn style-button-filter"> <img src={filter} alt="filter" /> Hide filters</button>
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
                                    <li><a className="dropdown-item" href="#section">popularity</a></li>
                                    <li><a className="dropdown-item" href="#section">new</a></li>
                                    <li><a className="dropdown-item" href="#section">rich</a></li>
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
                        <div className="d-flex align-items-center paginator-style">
                            <ul className="d-flex p-0 m-0">
                                <li className="mx-1"><a className="page-item-link text-decoration-none" href="#section">1</a></li>
                                <li className="mx-1"><a className="page-item-link text-decoration-none" href="#section">2</a></li>
                                <li className="mx-1"><a className="page-item-link text-decoration-none" href="#section">3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div>
                        <div>
                            <AnimButton text={'Clothes'} typeButton={'collapseClothes'} typeButtonTarget={"#collapseClothes"} />
                            <div className="collapse" id="collapseClothes">
                                <form className="form-group">
                                    <ul className="list-group">
                                        <li className="my-1">
                                            <input className="mx-auto form-control" type="search" placeholder="Search" aria-label="Search" />
                                        </li>
                                        <li className="my-1" >
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckClothes" />
                                            <label className="form-check-label mx-1" htmlFor="flexCheckClothes">
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
                        <div>
                            <AnimButton text={'Size'} typeButton={'collapseSize'} typeButtonTarget={"#collapseSize"} />
                            <div className="collapse" id="collapseSize">
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
                    </div>
                </div>
                <div className="col-9">
                    <div>Element</div>
                </div>
            </div>
        </div>
    )
}

export default Women
