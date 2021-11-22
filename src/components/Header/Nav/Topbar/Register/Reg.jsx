import React, { useState } from 'react'
import FormReg from './Modal/SignIn'
import RegModalView from './Modal/ModalSignView'

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
