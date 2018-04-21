import React, { Component } from 'react';
import style from './style.css';
import { Switch, Route } from 'react-router-dom';

import Main from './components/Main.jsx';
import News from './components/News.jsx';
import Profile from './components/Profile.jsx';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

export default class App extends Component {
    render() {

        return (
            <div className='wrapper'>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/news' component={News} />
                        <Route path='/profile' component={Profile} />
                        <Route path='/Login' component={Login} />
                    </Switch>
                </div>
                <Footer />
            </div>)
    }
}