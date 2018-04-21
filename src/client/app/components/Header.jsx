import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return <header className="header">
      header
     <div className="NavLink">
        <NavLink exact to='/' activeClassName="selected">главная</NavLink>
        <NavLink to='/news' activeClassName="selected">новости</NavLink>
        <NavLink to='/profile' activeClassName="selected">профиль</NavLink>
      </div>
      <Link to='/Login' className="Login">login</Link>
    </header>;
  }
}