import { createAction } from 'redux-actions';

export const setIsLogin = createAction('SET_IS_LOGIN');

export const setLogin = (dispatch) => {
    dispatch(setIsLogin())
}