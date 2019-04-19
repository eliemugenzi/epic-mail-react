import { GET_GROUPS, SEARCH_GROUP, FETCH_MEMBERS } from "../actions/types";

const initialState = {
  groups: [],
  groupSearchResult: [],
  currentGroup: {},
  currentGroupMessage: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_GROUPS:
      return {
        ...state,
        groups: action.payload
      };
    case SEARCH_GROUP:
      return {
        ...state,
        groupSearchResult: action.payload
      };
    default:
      return state;
  }
};
