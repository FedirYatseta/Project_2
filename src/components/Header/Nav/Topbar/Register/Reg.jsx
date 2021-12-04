import React, { useState } from 'react'
import FormReg from './Modal/SignIn'
import RegModalView from './Modal/ModalSignView'

function Reg() {

    const [modalActive, setModalActive] = useState()

    return (
        <div>
            <button  type="button" className="btn btn-link text-light text-decoration-none" onClick={() => setModalActive(true)}>Log in / Register</button>
            <RegModalView active={modalActive} setActive={setModalActive} >
                <FormReg />
            </RegModalView>
        </div>
    )
}

export default Reg
