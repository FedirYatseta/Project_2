import React from 'react'
import Usa from '../../../../../assets/flag-usa.png'
import {Dropdown} from 'react-bootstrap'

function Lang() {
    return (
        <div className="lang">
            <Dropdown>
                <Dropdown.Toggle variant="link" id="dropdown-basic">
                <img src={Usa} alt="USA" />   Eng / $
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Eng / $</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Rus / </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Ukr / </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default Lang
