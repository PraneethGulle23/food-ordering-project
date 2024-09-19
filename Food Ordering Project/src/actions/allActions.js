import { FETCH_RESTAURANTS, SIGNUP, SIGNIN, FETCH_RESTAURANTS_BY_ID,FETCH_MENU_ITEMS_BY_ID } from './types';
import axios from 'axios';

export const fetchRestaurants = () => dispatch => {
  axios.get("http://localhost:8080/restaurants/all")
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS,
        payload: res.data
      })
    })
};
export const SignupData = (signup) => dispatch => {
  axios.post("http://localhost:8080/user/signup", signup)
    .then(user => {
      dispatch({
        type: SIGNUP,
        payload: user.data
      })
      console.log(user.data)
    })
};

export const loginData = (mobile, password) => dispatch => {
  axios.request({
    url: "http://localhost:8080/user/signin",
    method: "post",
    auth: {
      username: mobile,
      password: password
    }
  }).then(login => {
    console.log(login.data)
    if(login.data.length ===0){
      console.log('wrong credentails')
    }
    dispatch({
      type: SIGNIN,
      payload: login.data
    })
  })
}

export const fetchRestaurantsById = (restaurantId) => dispatch => {
  axios.get("http://localhost:8080/restaurants/find/" +restaurantId)
    .then(res => {
      dispatch({
        type: FETCH_RESTAURANTS_BY_ID,
        payload: res.data
      })
    })
};
export const fetchMenuItemsById = (restaurantId) => dispatch => {
  axios.get("http://localhost:8080/menu/find/"+restaurantId)
    .then(res => {
      console.log(res)
      dispatch({
        type: FETCH_MENU_ITEMS_BY_ID,
        payload: res.data
      })
    })
};