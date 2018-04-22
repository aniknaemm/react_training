import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class Header extends Component {
  render() {
    const { isLogin } = this.props;
    return <header className="header">
      header
     <div className="NavLink">
        <NavLink exact to='/' activeClassName="selected">главная</NavLink>
        <NavLink to='/news' activeClassName="selected">новости</NavLink>
        <NavLink to='/profile' activeClassName="selected">профиль</NavLink>
      </div>
      {isLogin && <Link to='/Login' className="Login">login</Link>}
      {!(isLogin) && <Link to='/Logout' className="Login">logout</Link>}
 
    </header>;
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: !(state.isLogin)
  }
}

export default withRouter ( connect(mapStateToProps)(Header));