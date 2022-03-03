import { updateValue } from "../../utils/localStorage";
import {  USER_LOGIN_ERROR, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionTypes";
import { initialState } from "./auth.constants";
import {v4 as uuid} from "uuid"

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_SUCCESS: {
      let userToken = uuid();
      updateValue("userToken", userToken);
      return {
        ...state,
        isUserLoggedIn: true,
        ...payload
      };
    }
    case USER_LOGIN_ERROR: {
      updateValue("userToken", "");
      return {
        ...state,
        isUserLoggedIn: false,   
      };
    }
    case USER_LOGOUT: {
      updateValue("userToken", "");
      return {
        ...state,
        isUserLoggedIn: false,
        userToken: ""
      };
    }
    default: {
      return state;
    }
  }
};
