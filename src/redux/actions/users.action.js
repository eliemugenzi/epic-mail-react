import axios from "axios";
import { FETCH_USERS, FETCH_USER, GET_ERRORS } from "./types";
export const getUsers = () => dispatch => {
  const USERS_URL = "http://elie-epic-mail.herokuapp.com/api/v2/users";
  axios
    .get(`http://cors-anywhere.herokuapp.com/${USERS_URL}`)
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res.data.data
      });
    })
    .catch(err => console.log(err));
};

export const getSingleUser = id => dispatch => {
  const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${id}`;
  axios
    .get(`http://cors-anywhere.herokuapp.com/${USER_URL}`)
    .then(res => {
      if (res.data.status === 200) {
        dispatch({
          type: FETCH_USER,
          payload: res.data.data
        });
      } else {
      }
    })
    .catch(err => console.log(err));
};

export const login = user => dispatch => {
  const LOGIN_URL = "http://elie-epic-mail.herokuapp.com/api/v2/auth/login";
  axios
    .post(`http://cors-anywhere.herokuapp.com/${LOGIN_URL}`, user)
    .then(res => {
      if (res.data.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data.data[0].token);
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.error
        });
      }
    });
};

export const createAccount = user => dispatch => {
  const SIGNUP_URL = "http://elie-epic-mail.herokuapp.com/api/v2/auth/signup";
  axios
    .post(`http://cors-anywhere.herokuapp.com/${SIGNUP_URL}`, user)
    .then(response => {
      const res = response.data;
      if (res.status === 201) {
        localStorage.setItem("ACCESS_TOKEN", res.data[0].token);
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    });
};
