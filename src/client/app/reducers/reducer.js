import { handleActions } from 'redux-actions';

import { setIsLogin, setIsLogout } from '../actions/action';
import { clearIsLogin } from '../actions/clearErrorMsg';

const initialState = {
    isLogin: false,
    password: '12345',
    login: 'admin',
    errorLogin: false,
    errorMsg: "Имя пользователя или пароль введены не верно"
}

export const reducer = handleActions ({   
    [setIsLogin]: (state) => {
        return{
            ...state,
            isLogin: true,
            errorLogin: false
        }
    },
    [setIsLogout]: (state) => {
        return{
            ...state,
            isLogin: false,
            errorLogin: true
        }
    },
    [clearIsLogin]: (state) => {
        return{
            ...state,
            errorLogin: false
        }
    },
}, initialState);
