import { GET_ERRORS, FETCH_USERS, FETCH_USER } from "../actions/types";

const initialState = {
  users: [],
  error: "",
  user: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
      break;
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      };
      break;
    case FETCH_USER:
      return {
        ...state,
        user: action.payload
      };
      break;
    default:
      return state;
  }
};
