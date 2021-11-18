import React from 'react'
import './modal.css'


function Regmodalveiw( {active, setActive }) {
    return (
        <div className={ active ? "modal active":"modal"} onClick={() => setActive(false)}>
            <div className="modal_content" onClick={ e => e.stopPropagation()}>
            
            </div>
        </div>
    )
}

export default Regmodalveiw
