import {
    createAction
} from 'redux-actions';

export const loadInfoStart = createAction('LOAD_INFO_START');
export const loadInfoSuccess = createAction('LOAD_INFO_SUCCESS');
export const loadInfoFailure = createAction('LOAD_INFO_FAILURE');
export const LogOutUser = createAction('LOG_OUT_USER');
export const loadUserInfoForID = createAction('LOAD_USER_INFO_FOR_ID');
export const loadNewsFromServ = createAction('LOAD_NEWS_FROM_SERV');

export const setLogin = (dispatch, username, password) => {

    dispatch(loadInfoStart());
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/validate/`, {
            method: 'POST',
            headers: {
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

export const loadUserInfo = (dispatch, idUser) => {

    dispatch(loadInfoStart());
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/${idUser}`)
        .then(result => result.json())
        .then(res => {
            res.status === 'ok' ? dispatch(loadUserInfoForID(res)) : dispatch(loadInfoFailure(res));
        })
}
export const loadNews = (dispatch) => {

    dispatch(loadInfoStart());
    fetch(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
        .then(result => result.json())
        .then(res => {
            res.status === 'ok' ? dispatch(loadNewsFromServ(res)) : dispatch(loadInfoFailure(res));
        })
}