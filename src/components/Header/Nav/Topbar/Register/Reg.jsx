import React, { useState } from 'react'
import Regmodalveiw from './Modal/Regmodalveiw'

function Reg() {

    const [modalActive, setModalActive] = useState()
    return (
        <div>
            <button onClick={() => setModalActive(true)}>Log in / Register</button>
            <Regmodalveiw active={modalActive} setActive={setModalActive} />
        </div>
    )
}

export default Reg
