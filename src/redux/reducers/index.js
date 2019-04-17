import { combineReducers } from "redux";

import userReducer from "./user.reducer";
import messageReducer from "./message.reducer";
import groupReducer from "./group.reducer";
import uiReducer from "./ui.reducer";

export default combineReducers({
  user: userReducer,
  message: messageReducer,
  group: groupReducer,
  ui: uiReducer
});
