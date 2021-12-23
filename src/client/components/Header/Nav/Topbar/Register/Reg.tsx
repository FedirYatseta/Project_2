import React, { FC, useState, useContext } from 'react'
import FormReg from './Modal/SignIn'
import RegModalView from './Modal/ModalSignView'
import { Context } from '../../../../../..'
import { observer } from 'mobx-react-lite'
import { Link } from 'react-router-dom'

const Reg: FC = () => {

    const [modalActive, setModalActive] = useState<boolean>(false)
    const { store } = useContext(Context)
    
    if (!store.isAuth) {
        return (<div>
            <button type="button"
                className="btn btn-link text-light text-decoration-none"
                onClick={() => setModalActive(true)}>
                <span className="btn btn-link text-light text-decoration-none py-0">
                    Log in / Register
                </span>
            </button>
                <RegModalView active={modalActive} setActive={setModalActive} >
                    <FormReg />
                </RegModalView>
        </div>
        )
    }
    return (
        <div>
             <Link to="/account" className="btn btn-link text-light text-decoration-none" aria-current="page"> Мій Кабінет</Link> |{' '}
        </div>
    )
}

export default observer(Reg)
