import { createAction } from 'redux-actions';

export const clearIsLogin = createAction('CLEAR_IS_LOGIN');

export const clearLogin = (dispatch) => {
    dispatch(clearIsLogin());
}