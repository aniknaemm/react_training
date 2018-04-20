import React, { Component } from 'react';
import ReactDom from 'react-dom';
import style from './style.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';



export default class App extends Component {
    render() {
        return (
            <div className='wrapper'>
                <Header />
               
                
                    <Container />
                 
           
                <Footer />
            </div>)
    }
}
