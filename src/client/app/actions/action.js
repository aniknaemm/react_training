import { createAction } from 'redux-actions';

export const setIsLogin = createAction('SET_IS_LOGIN');
export const setIsLogout = createAction('SET_IS_LOGOUT');

export const setLogin = (dispatch, status) => {
    status ? dispatch(setIsLogin()) : dispatch(setIsLogout())
}