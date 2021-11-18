import React from 'react'
import Usa from '../../../../../assets/flag-usa.png'

function Lang() {
    return (
        <div className="lang">
            <div className="dropdown">
                <button className="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={Usa} alt="USA" />   Eng / $
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a className="dropdown-item" href="#">Eng / $</a></li>
                    <li><a className="dropdown-item" href="#">Rus / </a></li>
                    <li><a className="dropdown-item" href="#">Ukr /</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Lang
