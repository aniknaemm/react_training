import {
    handleActions
} from 'redux-actions';

import {
    loadInfoStart,
    loadInfoSuccess,
    loadInfoFailure,
    LogOutUser,
    loadUserInfoForID,
} from '../actions/action';

const initialState = {
    isLogin: false,
    errorLogin: false,
    errorMsg: '',
    idUser: '',
    isLoad: false,
    userData: [],
}

export const reducer = handleActions({
    [loadUserInfoForID]: (state, action) => {
        return {
            ...state,
            isLoad: false,
            userData: action.payload.data,
        }
    },
    [loadInfoStart]: (state) => {
        return {
            ...state,
            isLoad: true,
            errorLogin: false,
        }
    },
    [loadInfoSuccess]: (state, action) => {
        return {
            ...state,
            isLoad: false,
            idUser: action.payload.data.id,
            errorLogin: false,
            isLogin: true,
        }
    },
    [loadInfoFailure]: (state, action) => {
        return {
            ...state,
            isLoad: false,
            errorMsg: action.payload.message,
            errorLogin: true,
            isLogin: false,
        }
    },
    [LogOutUser]: (state) => {
        return {
            ...state,
            isLoad: false,
            errorLogin: false,
            isLogin: false,
        }
    },

}, initialState);