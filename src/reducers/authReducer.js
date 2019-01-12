import { LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT_SUCCESS } from "../constants/types";

const initialState = {
  restaurant_id: null,
  LogInError: null
};

const authReducer = (state = initialState, action) => {
  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      LogInError: action.payload.message
    };
  } else if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      LogInError: null,
      restaurant_id: action.payload.user.uid
    };
  } else if (action.type === LOGOUT_SUCCESS) {
    return {
      ...state,
      restaurant_id: null
    };
  }
  return state;
};
export default authReducer;
