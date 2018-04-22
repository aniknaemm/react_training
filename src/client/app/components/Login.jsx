import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/action';
import { Redirect } from 'react-router';
import ReactDom from 'react-dom';
class Login extends Component {
  handlerLogin = () =>{
    const { statusLogin, login, password } = this.props;
    if(ReactDom.findDOMNode(this.refs.loginInput).value === login &&
     ReactDom.findDOMNode(this.refs.paswordInput).value === password){
        statusLogin(true);
    } else {
      statusLogin(false);
    }
    
  }
  
  render() {
    const { isLogin, errorLogin, errorMsg } = this.props;
    return (
      <div className="loginForm">
      {isLogin && <Redirect to ='/profile'/>}
        <h2>Авторизация</h2>
        <input type="text" placeholder="login" ref="loginInput"/>
        <input type="pasword" placeholder="pasword" ref="paswordInput"/>
        <button onClick={this.handlerLogin}>Login</button> 
        {errorLogin && { errorMsg }}
      </div>)
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
    password: state.password,
    login: state.login,
    errorLogin: state.errorLogin,
    errorMsg: state.errorMsg,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    statusLogin: (status) => setLogin(dispatch, status)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);