import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'LoginForm'
const propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  remember: PropTypes.bool,
  errors: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const Form = ({ email, password, remember, errors, handleChange, handleSubmit }) => (
  // <form className="form" role="form" onSubmit={handleSubmit} noValidate>
  //   <h2 className="card-title">Please sign in</h2>
  //   <div className="form-group">
  //     <label htmlFor="email" className="sr-only">Email</label>
  //     <input type="text"
  //            className={`form-control form-control-lg rounded-0 ${errors.has('email') && 'is-invalid'}`}
  //            name="email"
  //            id="email"
  //            placeholder="Email address"
  //            value={email || ''}
  //            onChange={e => handleChange(e.target.name, e.target.value)}
  //            required
  //            autoFocus/>
  //     {errors.has('email') && <div className="invalid-feedback">{errors.first('email')}</div>}
  //   </div>
  //   <div className="form-group">
  //     <label htmlFor="password" className="sr-only">Password</label>
  //     <input type="password"
  //            className={`form-control form-control-lg rounded-0 ${errors.has('password') && 'is-invalid'}`}
  //            id="password"
  //            name="password"
  //            placeholder="Password"
  //            value={password || ''}
  //            onChange={e => handleChange(e.target.name, e.target.value)}
  //            required/>
  //     {errors.has('password') && <div className="invalid-feedback">{errors.first('password')}</div>}
  //   </div>
  //   <div>
  //     <label className="custom-control custom-checkbox">
  //       <input type="checkbox"
  //              name="remember"
  //              className="custom-control-input"
  //              onChange={e => handleChange(e.target.name, !remember)}/>
  //       <span className="custom-control-indicator" />
  //       <span className="custom-control-description small">Remember me on this computer</span>
  //     </label>
  //   </div>
  //   <button className="btn btn-lg btn-primary btn-block"
  //           type="submit"
  //           disabled={errors.any()}>Sign In</button>
  //   <p>Not a member? <Link to='/register'>Signup here</Link></p>
  // </form>
<form className="form" role="form" onSubmit={handleSubmit} noValidate>
  <div className="sign-wrapper mg-lg-l-50 mg-lg-r-50 mg-xl-l-60 mg-xl-r-60">
              <div className="wd-100p">
                <img width={130} src="images/login_register_logo.shipgrade.png" className="img-fluid mg-b-30 mg-t-30" alt="" />
                <h4 className="tx-color-01 mg-b-5">Welcome back!</h4>
                <p className="tx-color-03 tx-16 mg-b-40">Please sign in to continue.</p>
                <div className="form-group">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="yourname@yourmail.com" />
                </div>
                <div className="form-group">
                  <div className="d-flex justify-content-between mg-b-5">
                    <label className="mg-b-0-f">Password</label>
                    <a href="page-forgot.html" className="tx-13">Forgot password?</a>
                  </div>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <button className="btn btn-brand-02 btn-block">Sign In</button>
                <div className="divider-text">or</div>
                <button className="btn btn-outline-facebook btn-block"><ion-icon name="logo-facebook" />Sign In With Facebook</button>
                <button className="btn btn-outline-twitter btn-block">Sign In With Twitter</button>
                <div className="tx-13 mg-t-20 tx-center">Don't have an account? <a href="page-signup.html">Create an Account</a></div>
              </div>
            </div>
    </form>    
)

Form.displayName = displayName
Form.propTypes = propTypes

export default Form
