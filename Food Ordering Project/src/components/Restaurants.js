import React, { Component } from 'react';

import {NavLink} from  'react-router-dom';

import { connect } from 'react-redux';
import { fetchRestaurants } from '../actions/allActions';

class Restaurants extends Component {

    componentDidMount() {
        this.props.fetchRestaurants();
    }
    mapRestaurants() {
        const restaurantCards = this.props.reducer.map((restaurant, index) =>
            <div className="col-lg-4 my-3 " key={index}>
                <div className="card mb-4 ">
                    <img src={restaurant.restaurantImg} className="card-img-top" style={{ height: 193 }} alt="..." />
                    <div className="card-body ">
                        <h5 className="card-title">{restaurant.restaurantName}</h5>
                        <p className="card-text text-secondary font-italic">
                            {restaurant.restaurantSpeciality}
                        </p>
                        <NavLink to={"/Restaurants/viewmenu/"+restaurant.restaurantId} activeClassName="active"><i className="fas fa-eye mr-2"></i>Viewmenu</NavLink>
                    </div>
                </div>
            </div>
        )
        return restaurantCards
    }

    render() {
        return (
                <div className="container">
                    <div className="jumbotron py-4 my-2 mb-0 px-2 bg-primary">
                    <p className="text-white h4 text-center mb-0 font-bold" >Desire according to your MOOD</p>
                </div>
                    <div className="row">
                        {this.mapRestaurants()}
                    </div>
                </div>
            
        );
    }
}

const mapStateToProps = state => ({
    reducer: state.reducer.restaurants
});

export default connect(mapStateToProps, { fetchRestaurants })(Restaurants);