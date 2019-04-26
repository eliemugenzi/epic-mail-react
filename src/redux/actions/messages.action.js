import axios from "axios";
import {
  FETCH_MESSAGES,
  FETCH_MESSAGE,
  GET_ERRORS,
  GET_INFO,
  SEARCH_MESSAGE,
  GET_DRAFTS,
  GET_SENT_MAILS,
  LOADING,
  STOP_LOADING,
  SET_CURR_MESSAGE,
  SET_CURR_DRAFT,
  SET_CURR_SENT_MAIL
} from "./types";

export const getMessages = () => dispatch => {
  const MESSAGES_URL = "http://elie-epic-mail.herokuapp.com/api/v2/messages";
  dispatch({
    type: LOADING
  });
  fetch(`https://cors-anywhere.herokuapp.com/${MESSAGES_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 200) {
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data
        });
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

export const getMessage = id => dispatch => {
  const MESSAGE_URL = `http://elie-epic-mail.herokuapp.com/api/v2/messages/${id}`;

  fetch(`https://cors-anywhere.herokuapp.com/${MESSAGE_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: FETCH_MESSAGE,
          payload: res.data[0]
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    })
    .catch(err => console.log(err));
};

export const sendMessage = message => dispatch => {
  const MSG_URL = "http://elie-epic-mail.herokuapp.com/api/v2/messages";
  dispatch({
    type: LOADING
  });
  fetch(`https://cors-anywhere.herokuapp.com/${MSG_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    }),
    body: JSON.stringify(message)
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 201) {
        dispatch({
          type: GET_INFO,
          payload: "Message Sent!"
        });
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

export const searchMessages = keyword => dispatch => {
  const MSG_URL = `http://elie-epic-mail.herokuapp.com/api/v2/messages/search/?q=${keyword}`;

  fetch(`https://cors-anywhere.herokuapp.com/${MSG_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: SEARCH_MESSAGE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getDrafts = () => dispatch => {
  const DRAFTS_URL =
    "http://elie-epic-mail.herokuapp.com/api/v2/messages/draft";
  dispatch({
    type: LOADING
  });
  fetch(`https://cors-anywhere.herokuapp.com/${DRAFTS_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 200) {
        dispatch({
          type: GET_DRAFTS,
          payload: res.data
        });
      }
      else {
        dispatch({
          type:GET_ERRORS,
          payload:res.error
        })
      }
     
    })
    .catch(err => {
      dispatch({
        type: STOP_LOADING
      });
      dispatch({
        type: GET_ERRORS,
        payload:
          "Unable to connect to the server,check your internet connection and try again!"
      });
    });
};

export const getSentMails = () => dispatch => {
  const SENT_MSG_URL =
    "http://elie-epic-mail.herokuapp.com/api/v2/messages/sent";

  fetch(`https://cors-anywhere.herokuapp.com/${SENT_MSG_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_SENT_MAILS,
          payload: res.data
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: "You're offline,check your internet connection and try again!"
      });
    });
};

export const saveMessage = message => dispatch => {
  const SAVE_MSG_URL =
    "http://elie-epic-mail.herokuapp.com/api/v2/messages/draft";

  fetch(`https://cors-anywhere.herokuapp.com/${SAVE_MSG_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    }),
    body: JSON.stringify(message)
  })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.status === 201) {
        dispatch({
          type: GET_INFO,
          payload: "Message Saved as draft!"
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    });
};

export const deleteMessage = id => dispatch => {
  const DELETE_MSG_URL = `http://elie-epic-mail.herokuapp.com/api/v2/messages/${id}`;

  fetch(`https://cors-anywhere.herokuapp.com/${DELETE_MSG_URL}`, {
    method: "DELETE",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: GET_INFO,
          payload: "Message deleted!"
        });
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    });
};

export const setCurrentMessage = message => dispatch => {
  dispatch({
    type: SET_CURR_MESSAGE,
    payload: message
  });
};

export const setCurrentDraft = message => dispatch => {
  dispatch({
    type: SET_CURR_DRAFT,
    payload: message
  });
};

export const setCurrentSentMail = message => dispatch => {
  dispatch({
    type: SET_CURR_SENT_MAIL,
    payload: message
  });
};
