import { combineReducers } from "redux";

const initialState = {
  isRegistered: false
};

const userReducer = function(state = initialState, action) {
  switch (action.type) {
    case "REGISTER_USER":
      return {
        ...state,
        isRegistered: true
      };
    default:
      return state;
  }
};

export default combineReducers({
  userReducer
});
