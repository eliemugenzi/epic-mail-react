import { TOGGLE_SLIDE, LOADING, STOP_LOADING,CLOSE_SLIDE } from "../actions/types";

const initialState = {
  sidebarOpen: false,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SLIDE:
      return {
        ...state,
        sidebarOpen: !state.sidebarOpen
      };
    case LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    case CLOSE_SLIDE:
    return{
      ...state,
      sidebarOpen:false
    }
    default:
      return state;
  }
};
