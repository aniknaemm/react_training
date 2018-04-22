import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/action';
import { clearLogin } from '../actions/clearErrorMsg';
import { Redirect } from 'react-router';
import ReactDom from 'react-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.myRefLogin = React.createRef();
    this.myRefPassword = React.createRef();
  }
  handlerLogin = () => {
    const { statusLogin, login, password } = this.props;
    if (this.myRefLogin.current.value === login && this.myRefPassword.current.value === password) {
      statusLogin(true);
    } else {
      statusLogin(false);
    }
  }
  componentDidMount(){
    const { statusClear } = this.props;
    statusClear();
  }

  render() {
    const { isLogin, errorLogin, errorMsg } = this.props;
    return (
      <div className="loginForm">
        {isLogin && <Redirect to='/profile' />}
        <h2>Авторизация</h2>
        <input type="text" placeholder="login" ref={this.myRefLogin} />
        <input type="pasword" placeholder="pasword" ref={this.myRefPassword} />
        <button onClick={this.handlerLogin}>Login</button>
        {errorLogin && errorMsg }
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
    statusLogin: (status) => setLogin(dispatch, status),
    statusClear: () => clearLogin(dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);