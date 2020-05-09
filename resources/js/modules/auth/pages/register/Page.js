//import libs
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import $ from 'jquery'
import _ from 'lodash'
import { Redirect } from 'react-router-dom'
import { register } from '../../service'
import ReeValidate from 'ree-validate'

// import components
import Form from './components/Form'

// initialize component
class Page extends Component {
  static displayName = 'RegisterPage'
  static propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  
  constructor(props) {
    super(props)
    
    this.validator = new ReeValidate({
      name: 'required|min:6',
      email: 'required|email',
      password: 'required|min:6',
      passwordConfirmation: 'required|min:6'
    })
    
    this.state = {
      credentials: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
      },
      errors: this.validator.errors,
      fields: this.validator.fields
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    $('body').attr('style', 'background-color: #eee')
  }
  
  componentWillUnmount() {
    $('body').removeAttr('style')
  }
  
  // event to handle input change
  handleChange(name, value) {
    const { errors } = this.validator

    this.setState({credentials: { ...this.state.credentials, [name]: value }})
    errors.remove(name)
    
    this.validator.validate(name, value)
      .then(() => {
        this.setState({ errors })
      })
  }
  
  handleSubmit(e) {
    e.preventDefault()
    const { credentials } = this.state
    const { errors } = this.validator
  
    this.validator.validateAll(credentials)
      .then((success) => {
        if (success) {
          this.submit(credentials)
        } else {
          this.setState({ errors })
        }
      })
  }
  
  submit(credentials) {
    this.props.dispatch(register(credentials))
      .catch(({ error, statusCode }) => {
        const { errors } = this.validator
        
        if (statusCode === 422) {
          _.forOwn(error, (message, field) => {
            errors.add(field, message);
          });
        } else if (statusCode === 401) {
          errors.add('password', error);
        }
        
        this.setState({ errors })
      })
  }
  
  render() {
    // check if user is authenticated then redirect him to home page
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    
    const { name, email, password, passwordConfirmation } = this.state.credentials
    const props = {
      name,
      email,
      password,
      passwordConfirmation,
      errors: this.state.errors,
      handleChange: this.handleChange,
      handleSubmit: this.handleSubmit,
    }
    
    // return (
    // <div className="container py-5">
    //   <div className="row">
    //     <div className="col-md-12">
    //       <div className="row">
    //         <div className="mx-auto">
    //           <span className="anchor"/>
    //           <div className="card has-shadow">
    //             <div className="card-body">
    //               <Form {...props}  />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // )
   
      
        return (
    
          <div className="content-auth">
            <div className="container-fluid">
              <div className="media align-items-stretch justify-content-center ht-100p pos-relative">
                <div className="media-body align-items-center d-none d-lg-flex">
                  <div>
                    <img src="images/register/register.jpg" className="img-fluid" alt="" />
                  </div>
                </div>{/* media-body */}
                <div className="sign-wrapper mg-lg-l-50 mg-lg-r-50 mg-xl-l-60 mg-xl-r-60">
                  <div className="wd-100p">
                    <img width={130} src="images/login_register_logo.shipgrade.png" className="img-fluid mg-b-30 mg-t-30" alt="" />
                    {/*<h3 class="tx-color-01 mg-b-5">Create your account</h3>
                  <p class="tx-color-03 tx-16 mg-b-40">No upfront fees. No minimums. Get started for free.</p>*/}
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label>Firstname</label>
                        <input type="text" className="form-control" placeholder="Enter your firstname" />
                      </div>
                      <div className="form-group col-md-6">
                        <label>Lastname</label>
                        <input type="text" className="form-control" placeholder="Enter your lastname" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Email address</label>
                      <input type="email" className="form-control" placeholder="Enter your email address" />
                    </div>
                    <div className="form-group">
                      <label>Company Name</label>
                      <input type="text" className="form-control" placeholder="Enter your company name" />
                    </div>
                    <div className="form-group">
                      <div className="d-flex justify-content-between mg-b-5">
                        <label className="mg-b-0-f">Password</label>
                      </div>
                      <input type="password" className="form-control" placeholder="Enter your password" />
                    </div>
                    <div className="input-group mg-b-30">
                      <div className="input-group-prepend">
                        <span className="input-group-text">India (+91)</span>
                      </div>
                      <input id="inputPhoneNumber" type="text" className="form-control" placeholder="Enter phone number" />
                    </div>
                    <div className="form-group tx-12">
                      By clicking <strong>Create an account</strong> below, you agree to our terms of service and privacy statement.
                    </div>{/* form-group */}
                    <button className="btn btn-brand-02 btn-block">Create Account</button>
                    <div className="divider-text">or</div>
                    <button className="btn btn-outline-facebook btn-block">Sign Up With Facebook</button>
                    <button className="btn btn-outline-twitter btn-block">Sign Up With Twitter</button>
                    <div className="tx-13 mg-t-20 tx-center">Already have an account? <a href="page-signin.html">Sign In</a></div>
                  </div>
                </div>{/* sign-wrapper */}
              </div>{/* media */}
            </div>{/* container */}
          </div>
        );
      
  
  }
}

export default Page
