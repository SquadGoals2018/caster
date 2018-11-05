import { Reducer } from 'redux';
import axios from 'axios';

import { SessionAction, SessionActionTypes } from 'store/session/actions';

const API_URL = 'http://localhost:3000';

export const DEFAULT_AXIOS_STATE = {
  defaultAxios: axios.create({ baseURL: API_URL }),
};

const axiosReducer = (state = DEFAULT_AXIOS_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        defaultAxios: axios.create({
          baseURL: API_URL,
          headers: { token: action.payload.token },
        }),
      };
    case 'LOGIN_FAIL':
      return DEFAULT_AXIOS_STATE;
    case 'LOGOUT':
      return DEFAULT_AXIOS_STATE;
    default:
      return state;
  }
};

export default axiosReducer;
