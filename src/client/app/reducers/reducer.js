import { handleActions } from 'redux-actions';

import {
  loadInfoStart,
  loadInfoSuccess,
  loadInfoFailure,
  LogOutUser,
  loadUserInfoForID,
  loadNewsFromServ
} from '../actions/action';

const initialState = {
  isLogin: false,
  errorLogin: false,
  errorMsg: '',
  idUser: '',
  isLoad: false,
  userData: [],
  news: []
};

export const reducer = handleActions(
  {
    [loadNewsFromServ]: (state, action) => {
      return {
        ...state,
        isLoad: false,
        news: action.payload.data
      };
    },
    [loadUserInfoForID]: (state, action) => {
      const firstItem = 'web';
      action.payload.data.social = action.payload.data.social
        .filter(elem => elem.label === firstItem)
        .concat(action.payload.data.social.filter(elem => elem.label !== firstItem));
      return {
        ...state,
        isLoad: false,
        userData: action.payload.data
      };
    },

    [loadInfoStart]: state => {
      return {
        ...state,
        isLoad: true,
        errorLogin: false
      };
    },
    [loadInfoSuccess]: (state, action) => {
      return {
        ...state,
        isLoad: false,
        idUser: action.payload.data.id,
        errorLogin: false,
        isLogin: true
      };
    },
    [loadInfoFailure]: (state, action) => {
      return {
        ...state,
        isLoad: false,
        errorMsg: action.payload.message,
        errorLogin: true,
        isLogin: false
      };
    },
    [LogOutUser]: state => {
      return {
        ...state,
        isLoad: false,
        errorLogin: false,
        isLogin: false
      };
    }
  },
  initialState
);
