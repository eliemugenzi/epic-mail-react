import axios from "axios";
import {
  FETCH_USERS,
  FETCH_USER,
  GET_ERRORS,
  LOGGED_IN,
  LOGGED_OUT,
  STOP_LOADING,
  LOADING
} from "./types";

export const getUsers = () => dispatch => {
  const USERS_URL = "http://elie-epic-mail.herokuapp.com/api/v2/users";
  axios
    .get(`http://cors-anywhere.herokuapp.com/${USERS_URL}`)
    .then(res => {
      dispatch({
        type: FETCH_USERS,
        payload: res.data.data
      });
      dispatch({
        type: STOP_LOADING
      });
    })
    .catch(err => console.log(err));
};

export const getSingleUser = id => dispatch => {
  const USER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/users/${id}`;
  axios
    .get(`http://cors-anywhere.herokuapp.com/${USER_URL}`)
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
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
  dispatch({
    type: LOADING
  });
  /*
  axios
    .post(`http://cors-anywhere.herokuapp.com/${LOGIN_URL}`, user)
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.data.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data.data[0].token);
        dispatch(loggedIn());
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.data.error
        });
      }
    })
    .catch(err => {
      dispatch({
        type:GET_ERRORS,
        payload:"Login failed!"
      })
      dispatch({
        type:STOP_LOADING
      })
    });
    */

  fetch(`http://cors-anywhere.herokuapp.com/${LOGIN_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: user.email,
      password: user.password
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 200) {
        localStorage.setItem("ACCESS_TOKEN", res.data[0].token);
        dispatch(loggedIn());
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    })
    .catch(err => {
      dispatch({
        type: STOP_LOADING
      });
      console.log(err);
    });
};

export const createAccount = user => dispatch => {
  const SIGNUP_URL = "http://elie-epic-mail.herokuapp.com/api/v2/auth/signup";
  dispatch({
    type: LOADING
  });

  fetch(`http://cors-anywhere.herokuapp.com/${SIGNUP_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      password: user.password
    })
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 201) {
        localStorage.setItem("ACCESS_TOKEN", res.data[0].token);
        dispatch(loggedIn());
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    })
    .catch(err => {
      console.log("error");
      dispatch({
        type: STOP_LOADING
      });
      console.log(err);
    });
};

export const loggedIn = () => {
  return {
    type: LOGGED_IN
  };
};

export const loggedOut = () => {
  return {
    type: LOGGED_OUT
  };
};

export const logOut = () => {
  localStorage.clear();
  return {
    type: LOGGED_OUT
  };
};
