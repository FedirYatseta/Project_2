import React, { useState } from 'react'
import FormSingIn from './SignUp'
import RegModalView from './ModalSignView'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import PropTypes from 'prop-types';



async function loginUser(credentials) {
    return fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }


function SignIn({ setToken }) {
    const [modalActive, setModalActive] = useState()

    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }
    return (
     
            <div>
                <form className="px-4 py-3" onSubmit={handleSubmit}>
                    <h1 className="d-flex justify-content-center sing-in-item">Sign in</h1>
                    <h6 className="d-flex justify-content-center text-wrap fs-6 py-4 modal_text_h6 sing-in-item-describe"> Sign in to your account using email and password provided during registration.</h6>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"  onChange={e => setUserName(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-3 d-flex justify-content-between">
                        <div className="form-check ">
                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                            <label className="form-check-label" htmlFor="dropdownCheck">
                                Keep me signed in
                            </label>
                        </div>
                        <a className="link" href="#">Forgot password?</a>
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-success">Sign in</button>
                    </div>
                    <a type="button" to="/signup" className="text-decoration-none" onClick={() => setModalActive(true)}>Don't have an account? Sign up</a>
                    {/* <Routes>
                        <Route path="/signup" element={<FormSingIn />}>
                            <RegModalView active={modalActive} setActive={setModalActive} >
                                
                            </RegModalView>
                        </Route>
                    </Routes> */}

                </form>
                <div className="dropdown-divider"></div>
                <span className="d-flex justify-content-center py-3">Or sign in with</span>
                <div className="col d-flex justify-content-center py-3">
                    <i className="fab fa-facebook-square py-2 px-2"></i>
                    <i className="fab fa-google py-2 px-2"></i>
                    <i className="fab fa-twitter py-2 px-2"></i>
                    <i className="fab fa-linkedin py-2 px-2"></i>
                </div>
            </div>
    
    )
}
SignIn.propTypes = {
    setToken: PropTypes.func.isRequired
  };

export default SignIn
