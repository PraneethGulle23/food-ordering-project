import React, { Component } from 'react';
import Signup from './Signup';
import Login from './Login';
import Cart from './Cart';
import Restaurants from './Restaurants';
import Home from './Home';
import Restaurantitems from './Restaurantitems';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';

class Navbar extends Component {

    render() {
        return (
            <div>
                <Router>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                        <NavLink className="navbar-brand" to="/Home" activeClassName="active"><b className="font-weight-bold font-italic h4"><i className="fas fa-toolbox"></i>FoodVault</b></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarColor01">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Restaurants" activeClassName="active"><i className="fas fa-hotel"></i>
                                        <span className="ml-2 h6">Restaurants</span></NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Cart" activeClassName="active"><i className="fas fa-shopping-cart"></i>
                                        <span className="ml-2 h6">Cart</span></NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Login" activeClassName="active"><i className="fas fa-user"></i>
                                        <span className="ml-2 h6">Login </span></NavLink>

                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/Signup" activeClassName="active"><i className="fas fa-user-plus"></i>
                                        <span className="ml-2 h6">Create Account</span></NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/Restaurants" component={Restaurants} />
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Cart" component={Cart} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Signup" component={Signup} />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Restaurants/viewmenu/:restaurantId" component={Restaurantitems} />
                </Router>
                <footer className="page-footer font-small blue pt-4   py-2 my-5 mb-4 px-0 bg-light">
                    <div className="container-fluid text-center text-md-center">
                        <div className="row">
                            <div className="col-md-6 mt-md-0 mt-3">

                                <h5 className="text-uppercase">For Support and Feedback</h5>
                                <p><span className="btn-floating btn-lg btn-fb bg-primary" type="button" role="button"><i className="fab fa-facebook-f"></i></span>&nbsp;
                                    <span className="btn-floating btn-lg btn-tw bg-info" type="button" role="button"><i className="fab fa-twitter"></i></span>&nbsp;
                                    <span className="btn-floating btn-lg btn-li bg-primary" type="button" role="button"><i className="fab fa-linkedin-in"></i></span>&nbsp;
                                    <span className="btn-floating btn-lg btn-ins bg-danger" type="button" role="button"><i className="fab fa-instagram"></i></span>&nbsp;
                                    <span className="btn-floating btn-lg btn-whatsapp bg-success" type="button" role="button"><i className="fab fa-whatsapp"></i></span></p>
                            </div>

                        </div>
                        <div className="footer-copyright text-center py-3"><b><i className="fas fa-toolbox"></i>© 2020 Copyright @ FoodVault-Services </b></div>
                        <div>
                         <b>An Online Food Ordering Marketplace </b>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Navbar;