import {
  GET_ERRORS,
  FETCH_USERS,
  FETCH_USER,
  GET_INFO,
  LOGGED_IN,
  LOGGED_OUT
} from "../actions/types";

const initialState = {
  users: [],
  error: "",
  user: {},
  info: "",
  loggedIn: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
    case GET_INFO:
      return {
        ...state,
        info: action.payload
      };
    case LOGGED_IN:
      return {
        ...state,
        loggedIn: true
      };
    case LOGGED_OUT:
      return {
        ...state,
        loggedIn: false
      };
    default:
      return state;
  }
};
