import { handleActions } from 'redux-actions';

import { setIsLogin } from '../actions/action';

const initialState = {
    isLogin: false
}

export const reducer = handleActions ({   
    [setIsLogin]: (state) => {
        return{
            ...state,
            isLogin: !(state.isLogin)
        }
    },
}, initialState);
