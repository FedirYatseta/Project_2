import React from 'react'

function SignUp() {
    return (
        <div>
            <form className="px-4 py-3">
                <h1 className="d-flex justify-content-center sing-in-item">Sign in</h1>
                <h6 className="d-flex justify-content-center text-wrap fs-6 py-4 modal_text_h6 sing-in-item-describe"> Sign in to your account using email and password provided during registration.</h6>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Full Name</label>
                    <input type="name" className="form-control" id="exampleDropdownFormEmail1" placeholder="Your full name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleDropdownFormPassword1" className="form-label"> Confirm Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password" />
                </div>
                <div className="mb-3 d-flex justify-content-between">
                    <div className="form-check ">
                        <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                        <label className="form-check-label" htmlFor="dropdownCheck">
                            Remember me
                        </label>
                    </div>
                    <a className="link" href="#">Forgot password?</a>
                </div>
                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-success">Sign up</button>
                </div>
                <a className=" d-flex my-4 px-0" href="#">Don't have an account? Sign up</a>
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

export default SignUp
