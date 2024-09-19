import React, { Component } from 'react';
import User from '../model/User';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {SignupData} from '../actions/allActions.js';
class Signup extends Component {

    user:User
compountDidMount(){
    this.user=new User()
}

    
    constructor(props) {
        super(props);
        this.user = new User()
        this.state = {
            user: this.user,
            emailError: false,
            passwordError: false,
            lengthError: false,
            matchError: false,
            ageError: false,
            agelimitError: false,
            phoneNumberError: false,
            disabledFlag: true,
            displayFlag: false,
            phoneNumberEmptyError: false,
            AddressError: false,
            pincodeError: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.props.user === undefined) {
            this.props.SignupData(this.user);
            this.user = new User()
            this.setState({
                displayFlag: true,

            })

    }
}

    handleNameChange(event) {
        this.user.userName = event.target.value
        this.setState({
            user: this.user,
            nameError: (this.user.userName === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === ""  || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false
        })
    }
    handleEmailChange(event) {
        this.user.userEmail = event.target.value
        this.setState({
            user: this.user,
            emailError: (this.user.userEmail === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.retypePassword === "" || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false
        })
    }
    handlePasswordChange() {
        this.user.userPassword = this.passwordRef.value
        this.setState({
            user: this.user,
            passwordError: (this.user.userPassword === "") ? true : false,
            lengthError: (this.user.userPassword.length <= 6) ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.retypePassword === "" || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false
        })
    }

    handleAddressChange(event) {
        this.user.userAddress = event.target.value
        this.setState({
            user: this.user,
            ageError: (this.user.userAddress === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.retypePassword === "" || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false
        })
    }

    handlephoneNumberChange(event) {
        this.user.userMobile = event.target.value
        this.setState({
            user: this.user,
            phoneNumberEmptyError: (this.user.userMobile === "") ? true : false,
            phoneNumberError: (this.user.userMobile.length > 10 || this.user.userMobile.length < 10) ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.retypePassword === "" || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false
        })
    }

    handlePincodeChange(event) {
        this.user.userPincode = event.target.value
        this.setState({
            user: this.user,
            pincodeError: (this.user.userPincode.length > 6) ? true : false,
            pincodeEmptyError: (this.user.userPincode.length === "") ? true : false,
            disabledFlag: (this.user.userName === "" || this.user.userEmail === "" || this.user.userPassword === "" || this.user.retypePassword === "" || this.user.userAddress === "" || this.user.userMobile === "" || this.user.userPincode === "") ? true : false

        })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3 my-3 mb-4 px-2 bg-info">
                    <p className="text-white h4 text-center mb-0 font-bold" ><i className="fas fa-id-badge"></i>
                    <span className="ml-2">Create a New account for FoodVault</span></p>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset>

                        <div className="form-group">
                            <label>User Name</label>
                            <input type="text" className="form-control" placeholder="Enter User Name" value={this.state.user.userName} onChange={(event) => this.handleNameChange(event)} />
                            {
                                (this.state.nameError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Name can't be empty</div> : null
                            }
                        </div>


                        <div className="form-group">
                            <label>Email address</label>
                            <input type="text" className="form-control" placeholder="Enter email" value={this.state.user.userEmail} onChange={(event) => this.handleEmailChange(event)} />
                            {
                                (this.state.emailError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Email can't be empty
                                </div> : null
                            }

                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={(input) => this.passwordRef = input} value={this.state.user.userPassword} onChange={() => this.handlePasswordChange()} />
                            {
                                (this.state.passwordError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Password can't be empty
                                   </div> : null
                            }
                            {
                                (this.state.lengthError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Password should be contain atleast 6 characters
                  </div> : null
                            }

                        </div>

                        <div className="form-group">
                            <label>Phone Number</label>
                            <input type="text" className="form-control" placeholder="Enter Phone Number" value={this.state.user.userMobile} onChange={(event) => this.handlephoneNumberChange(event)} />
                            
                            {
                                (this.state.phoneNumberError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Phone number should be 10 digits
                            </div> : null
                            }
                            {
                                (this.state.phoneNumberEmptyError) ? <div className="alert alert-danger">Phone Number shouldn't be empty</div> : null
                            }
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" className="form-control" placeholder="Enter Address" value={this.state.user.userAddress} onChange={(event) => this.handleAddressChange(event)} />
                            {
                                (this.state.AddressError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Address can't be empty
                               </div> : null
                            }
                        </div>


                        <div className="form-group">
                            <label>Pincode</label>
                            <input type="text" className="form-control" placeholder="Enter Pin Code" value={this.state.user.userPincode} onChange={(event) => this.handlePincodeChange(event)} />

                            {
                                (this.state.pincodeError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Pincode can't be empty
                          </div> : null
                            }
                            {
                                (this.state.pincodeEmptyError) ?
                                    <div className="alert alert-danger" role="alert">
                                        Pincode must be six digits only</div> : null
                            }
                        </div>

                        <button className="btn btn-primary" type="submit" disabled={this.state.disabledFlag}>Submit</button>
                    </fieldset>
                </form>
                {(this.state.displayFlag) ? <div className="alert alert-success"><i class="fal fa-shield-check"></i> Registered Successfully!!!</div> : null}
            </div>
        );
    }
}
Signup.propTypes = {
    SignupData : PropTypes.func.isRequired,
}

export default connect(null, {SignupData})(Signup);

