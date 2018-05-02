import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setLogin } from '../actions/action';

class Header extends Component {
  logOut = () => {
    const { statusLogin } = this.props;
    statusLogin(false);
  }

  render() {
    const { isLogin } = this.props;
    return <header className="header">
      header
     <div className="NavLink">
        <NavLink exact to='/' activeClassName="selected">главная</NavLink>
        <NavLink to='/news' activeClassName="selected">новости</NavLink>
        <NavLink to='/profile' activeClassName="selected">профиль</NavLink>
      </div>
      {!(isLogin) && <Link to='/Login' className="Login">login</Link>}
      {isLogin && <Link to='/' onClick={this.logOut} className="Login">logout</Link>}
 
    </header>;
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    statusLogin: (status) => setLogin(dispatch, status),
  }
}

export default withRouter ( connect(mapStateToProps, mapDispatchToProps)(Header));