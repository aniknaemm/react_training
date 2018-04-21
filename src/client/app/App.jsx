import React, { Component } from 'react';

import style from './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';


export default class App extends Component {
    render() {
        const { history } = this.props;
        return (
            <div className='wrapper'>
                <Header />
                <Container history={history} />
                <Footer />
            </div>)
    }
}