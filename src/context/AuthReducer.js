import { AUTH_USER_CLEAR, AUTH_USER_SUCCESS } from "./types";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return action.user;
    case AUTH_USER_CLEAR:
      return null;
    default:
      return state;
  }
};

export default AuthReducer;
