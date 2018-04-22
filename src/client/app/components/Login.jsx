import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/action';
import { Redirect } from 'react-router';
class Login extends Component {
  handlerLogin = () =>{
    const { statusLogin } = this.props;
    statusLogin();
  }
  render() {
    const { isLogin } = this.props;
    return (
      <div className="loginForm">
      {isLogin && <Redirect to ='/profile'/>}
        <h2>Авторизация</h2>
        <input type="text" placeholder="login" />
        <input type="pasword" placeholder="pasword" />
        <button onClick={this.handlerLogin}>Login</button> 
      </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    statusLogin: () => setLogin(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);