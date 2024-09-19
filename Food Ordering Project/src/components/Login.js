import React, { Component } from 'react';
import User from '../model/User';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {loginData} from '../actions/allActions.js';
class Login extends Component {

user  
  constructor(props) {
    super(props);
    this.user = new User()
    this.state = {
      user: this.user,
      mobileError: false,
      phoneLength: false,
      passwordError: false,
      disabledFlag: false,
      displayFlag:false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.loginData(this.state.user.userMobile,this.state.user.userPassword)
    this.setState({
      displayFlag:true      
    })
   
  }
  handleMobileChange(event) {
 
    this.user.userMobile = event.target.value
    this.setState({
      user: this.user,
      mobileError: (this.user.userMobile === "") ? true : false,
    })
    this.buttonFlag()
  }
  handlePasswordChange(event) {
 
    this.user.userPassword = event.target.value
    this.setState({
      user: this.user,
      passwordError: (this.user.userPassword === "") ? true : false,
    })
    this.buttonFlag()
  }
  buttonFlag() {
    this.setState({
      disabledFlag: (this.state.user.userMobile ==="" || this.state.user.userPassword === "" )? true:false
    })
  }
  render() {
    return (
      <div className="container">
        <div className="jumbotron py-3 my-5 mb-0 px-2 bg-info">
                    <p className="text-white h4 text-center mb-0 font-bold" ><i className="fas fa-user-lock"></i>
                    <span className="ml-2">Login to your account</span></p>
                </div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <fieldset>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="text" className="form-control" placeholder="Enter Phone Number" value={this.state.user.userMobile} onChange={(event)=>this.handleMobileChange(event)} />
              {
                (this.state.mobileError) ?
                  <div className="alert alert-danger" role="alert">
                    mobile can't be empty
                  </div> : null
              }
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" value={this.state.user.userPassword} onChange={(event)=>this.handlePasswordChange(event)} />
              {
              (this.state.passwordError) ?
              <div className="alert alert-danger" role="alert">
                mobile can't be empty
              </div> : null
          }
            </div>
            <button className="btn btn-primary" >Login</button>
          </fieldset>
        </form>
        {(this.state.displayFlag) ? <div className="alert alert-success"><i class="fal fa-shield-check"></i>You're logged in!!</div> : null}
      </div>
    );
  }
}
Login.propTypes = {
  loginData : PropTypes.func.isRequired,
}

export default connect(null, {loginData})(Login);
