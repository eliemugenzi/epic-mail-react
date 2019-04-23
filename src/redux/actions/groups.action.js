import {
  GET_GROUPS,
  GET_GROUP_MESSAGES,
  GET_INFO,
  GET_ERRORS,
  SEARCH_GROUP,
  FETCH_MEMBERS,
  LOADING,
  STOP_LOADING
} from "./types";

export const createGroup = group => dispatch => {
  const CREATE_GRP_URL = "http://elie-epic-mail.herokuapp.com/api/v2/groups";
  dispatch({
    type: LOADING
  });

  fetch(`https://cors-anywhere.herokuapp.com/${CREATE_GRP_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    }),
    body: JSON.stringify(group)
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 201) {
        dispatch({
          type: GET_INFO,
          payload: "Group Created"
        });
        dispatch(getGroups());
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
      dispatch({
        type: GET_ERRORS,
        payload:
          "You're offline,check your internet connection and try again..."
      });
    });
};

export const getGroups = () => dispatch => {
  const GET_GRP_URL = "http://elie-epic-mail.herokuapp.com/api/v2/groups";

  dispatch({
    type: LOADING
  });

  fetch(`https://cors-anywhere.herokuapp.com/${GET_GRP_URL}`, {
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
      if (res.status === 200)
        dispatch({
          type: GET_GROUPS,
          payload: res.data
        });
      else {
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
      dispatch({
        type: GET_ERRORS,
        payload:
          "You're offline,check your internet connection and try again..."
      });
    });
};

export const sendGroupMessage = (id, message) => dispatch => {
  const SEND_MSG_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/messages`;

  dispatch({
    type: LOADING
  });

  fetch(`https://cors-anywhere.herokuapp.com/${SEND_MSG_URL}`, {
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
          payload: "Group message sent!"
        });
        dispatch(getGroupMessages(id));
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
      dispatch({
        type: GET_ERRORS,
        payload:
          "You're offline, check your internet connection and try again..."
      });
    });
};

export const getGroupMessages = id => dispatch => {
  const GRP_MSG_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/messages`;

  dispatch({
    type: LOADING
  });

  fetch(`https://cors-anywhere.herokuapp.com/${GRP_MSG_URL}`, {
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
          type: GET_GROUP_MESSAGES,
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
      dispatch({
        type: GET_ERRORS,
        payload:
          "Ypu're offline, check your internet connection and try again..."
      });
    });
};

export const renameGroup = (id, groupInfo) => dispatch => {
  const RENAME_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}`;

  dispatch({
    type: LOADING
  });

  fetch(`https://cors-anywhere.herokuapp.com/${RENAME_URL}`, {
    method: "PATCH",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    }),
    body: JSON.stringify(groupInfo)
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: STOP_LOADING
      });
      if (res.status === 200) {
        dispatch({
          type: GET_INFO,
          payload: "Group Renamed!"
        });
        dispatch(getGroups());
      } else {
        dispatch({
          type: STOP_LOADING
        });
        dispatch({
          type: GET_ERRORS,
          payload: res.error
        });
      }
    })
    .catch(err => console.log(err));
};

export const deleteGroup = id => dispatch => {
  const DELETE_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}`;

  fetch(`https://cors-anywhere.herokuapp.com/${DELETE_URL}`, {
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
          payload: "Group Deleted"
        });
        dispatch(getGroups());
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
        payload: "You're offline, check your internet and try again..."
      });
    });
};

export const addUser = (id, user) => dispatch => {
  const ADDUSER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/users`;

  fetch(`https://cors-anywhere.herokuapp.com/${ADDUSER_URL}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    }),
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(res => {
      if (res.status === 201) {
        dispatch({
          type: GET_INFO,
          payload: "New User added to this group"
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

export const removeUser = (id, userId) => dispatch => {
  const REMOVEUSER_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/users/${userId}`;

  fetch(`https://cors-anywhere.herokuapp.com/${REMOVEUSER_URL}`, {
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
          payload: "A user removed from this group"
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

export const searchGroup = keyword => dispatch => {
  const SEARCH_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/search/?q=${keyword}`;

  fetch(`https://cors-anywhere.herokuapp.com/${SEARCH_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: SEARCH_GROUP,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

export const getGroupMembers = id => dispatch => {
  const GRP_MEMBERS_URL = `http://elie-epic-mail.herokuapp.com/api/v2/groups/${id}/users`;
  fetch(`https://cors-anywhere.herokuapp.com/${GRP_MEMBERS_URL}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
    })
  })
    .then(res => res.json())
    .then(res => {
      dispatch({
        type: FETCH_MEMBERS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload:
          "You're offline,check your internet connection and try again..."
      });
    });
};
