import {
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "./auth.actionTypes";

export const loginRequest = () => {
  return {
    type: USER_LOGIN_REQUEST
  };
};
export const loginSuccess = () => {
  return {
    type: USER_LOGIN_SUCCESS
  };
};
export const loginError = () => {
  return {
    type: USER_LOGIN_ERROR
  };
};

export const logout = (payload) => {
  return {
    type: USER_LOGOUT
  };
};
