import React, { useState } from 'react'
import FormReg from './Modal/FormReg'
import RegModalView from './Modal/RegModalView'

function Reg() {

    const [modalActive, setModalActive] = useState()
    return (
        <div>
            <a type="button" className="text-light text-decoration-none" onClick={() => setModalActive(true)}>Log in / Register</a>
            <RegModalView active={modalActive} setActive={setModalActive} >
                <FormReg />
            </RegModalView>
        </div>
    )
}

export default Reg
