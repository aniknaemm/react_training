import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import{ createStore, applyMiddleware  } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import App from './app';
import { reducer } from './reducers/reducer';


const history = createHistory();
const middleware = routerMiddleware(history);
// Redux DevTools Extension
const store = createStore(reducer , applyMiddleware(middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDom.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App history={history}/>  
        </ConnectedRouter>
    </Provider>
), document.getElementById('app'));



// процесс такой
// 1. import createHistory from 'history/createBrowserHistory'
// 2. history = createHistory()
// 3. в миддлаваре routerMiddleware(history),
// 4. createStore
// 5. <ConnectedRouter history={history}>



// import { routerMiddleware } from 'react-router-redux' не забудь
