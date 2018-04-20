import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return <header className="header">
      header
      <Link to='/'>главная</Link>
      <Link to='/news' >новости</Link>
      <Link to='/profile'>профиль</Link>
    </header>;
  }
}