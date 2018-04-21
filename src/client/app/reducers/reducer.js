import { handleActions } from 'redux-actions';

import { load } from '../actions/action';

const initialState = {
    isLogin: false
}

export const reducer = handleActions({
    [load]: (state) => {
        return{
            ...state,
        }
    },
}, initialState);
