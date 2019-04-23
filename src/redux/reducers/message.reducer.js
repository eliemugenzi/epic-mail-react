import {
  FETCH_MESSAGES,
  GET_DRAFTS,
  GET_SENT_MAILS,
  SEARCH_MESSAGE,
  SET_CURR_MESSAGE,
  SET_CURR_DRAFT
} from "../actions/types";
const initialState = {
  messages: [],
  sentMails: [],
  drafts: [],
  searchResults: [],
  currentMessage: {},
  currentDraft: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        messages: action.payload
      };
    case GET_DRAFTS:
      return {
        ...state,
        drafts: action.payload
      };
    case SEARCH_MESSAGE:
      return {
        ...state,
        searchResults: action.payload
      };
    case GET_SENT_MAILS:
      return {
        ...state,
        sentMails: action.payload
      };
    case SET_CURR_MESSAGE:
      return {
        ...state,
        currentMessage: action.payload
      };
    case SET_CURR_DRAFT:
      return {
        ...state,
        currentDraft: action.payload
      };
    default:
      return state;
  }
};
