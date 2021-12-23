import React, { FC, useContext, useState } from 'react'
import { Context } from '../../../../../../..'
import { observer } from 'mobx-react-lite'
const SignIn: FC = () => {
    const [email, setEmail] = useState<string>('')

    const [password, setPassword] = useState<string>('')
    const { store } = useContext(Context)

    const getLogin = document.querySelector('.login-form')
    const getReg = document.querySelector('.add-registration-form')
    const btnReg = document.querySelector('.registration-form')
    btnReg?.addEventListener('click' , e => {
        e.preventDefault()
        getLogin?.classList.remove('login-form')
        getLogin?.classList.add('add-registration-form')

        getReg?.classList.add('login-form')
        getReg?.classList.remove('add-registration-form')
    })
    // const 
    
    return (
        <div className="col">
            <form className="px-4 py-3 login-form">
                <h1 className="d-flex justify-content-center sing-in-item">Sign in</h1>
                <h6 className="d-flex justify-content-center text-wrap  py-4 sing-in-item-describe"> Sign in to your account using email and password provided during registration.</h6>
                <div className="mb-3 ">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="exampleDropdownFormEmail1"
                        placeholder="email@example.com"
                        onChange={e => setEmail(e.target.value)}
                        value={email} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                    <input type="password"
                        className="form-control"
                        id="exampleDropdownFormPassword1"
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password} />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div className="form-check ">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                            Keep me signed in
                        </label>
                    </div>
                    <button className="btn btn-link" >Forgot password?</button>
                </div>
                <div className="d-grid gap-2">
                <button
                        type="submit"
                        className="btn btn-success"
                        onClick={() => store.login(email, password)}>Sign in</button>
                </div>
                <button
                    type="button"
                    className="btn btn-link text-decoration-none registration-form">Don't have an account? Sign up</button>
            </form>
            <form className="px-4 py-3 add-registration-form">
            <div className="form-registration">
            <h1 className="d-flex justify-content-center sing-in-item">Sign up</h1>
                <h6 className="d-flex justify-content-center text-wrap fs-6 py-4 modal_text_h6 sing-in-item-describe"> Registration takes less than a minute but gives you full control over your orders.</h6>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownForName" className="form-label">Full Name</label>
                        <input type="name" className="form-control" id="exampleDropdownForName" placeholder="Your full name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"
                         onChange={e => setEmail(e.target.value)}
                         value={email}  />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                         />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label"> Confirm Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                    </div>
                    <div className="form-check d-flex justify-content-start align-item-center">
                        <input type="checkbox" className="form-check-input input-item-center" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                        Remember me
                        </label>
                    </div>
                    <div className="d-grid gap-2">
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={() => store.registration(email, password)}>Sign Up</button>
                </div>
                </div>
                <button
                    type="button"
                    className="btn btn-link text-decoration-none add-register-form"
                >Already have an account? Sign in</button>
            </form>
            <div className="dropdown-divider"></div>
            <span className="d-flex justify-content-center py-3">Or sign in with</span>
            <div className="col d-flex justify-content-center py-2">
                <i className="fab fa-facebook-square py-2 px-2"></i>
                <i className="fab fa-google py-2 px-2"></i>
                <i className="fab fa-twitter py-2 px-2"></i>
                <i className="fab fa-linkedin py-2 px-2"></i>
            </div>
        </div>

    )
}
export default observer(SignIn)
