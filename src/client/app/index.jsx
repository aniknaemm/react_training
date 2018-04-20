import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import{ createStore } from 'redux';

import App from './app';
import { reducer } from './reducers/reducer';

const store = createStore(reducer);

ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('app'));