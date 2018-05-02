import {
    createAction
} from 'redux-actions';

export const loadInfoStart = createAction('LOAD_INFO_START');
export const loadInfoSuccess = createAction('LOAD_INFO_SUCCESS');
export const loadInfoFailure = createAction('LOAD_INFO_FAILURE');
export const LogOutUser =  createAction('LOG_OUT_USER');

export const setLogin = (dispatch, username, password) => {

    dispatch(loadInfoStart());
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate/`, {
            method: 'POST',
            headers:{ 
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: username,
                password: password,
            })
        })
        .then(result => result.json())
        .then(res => {
            res.status === 'ok' ? dispatch(loadInfoSuccess(res)) : dispatch(loadInfoFailure(res));
        })
}
export const setLogOut = (dispatch) => {
    dispatch(LogOutUser());
}