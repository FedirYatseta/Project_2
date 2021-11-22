import React from 'react'


function RegModalView({ active, setActive, children }) {
    return (
        <div className={active ? "modal_reg active_reg" : "modal_reg"} onClick={() => setActive(false)}>
            <div className={active ? "modal_content_reg active_reg" : "modal_content_reg"} onClick={ e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default RegModalView
