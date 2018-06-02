import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/action';
import { Redirect } from 'react-router';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';

class Login extends Component {
  constructor(props) {
    super(props);
    this.myRefLogin = React.createRef();
    this.state = {
      password: ''
    };
  }
  handlerLogin = () => {
    const { statusLogin } = this.props;
    const { password } = this.state;
    const username = this.myRefLogin.current.value;
    statusLogin(username, password);
    this.setState({
      password: ''
    });
  };
  handlerPassword = e => {
    const value = e.currentTarget.value;
    this.setState(prev => ({
      ...prev,
      password: value
    }));
  };
  handlerLoginEnter = e => {
    if (e.key === 'Enter') {
      this.handlerLogin();
    }
  };

  render() {
    const { isLogin, errorLogin, errorMsg, isLoad } = this.props;
    const { password } = this.state;
    return (
      <div className="loginForm" onKeyPress={this.handlerLoginEnter}>
        {isLogin && <Redirect to="/profile" />}
        <h2>Авторизация</h2>
        <input type="email" placeholder="email" ref={this.myRefLogin} />
        <input type="pasword" placeholder="pasword" onChange={this.handlerPassword} value={password} />
        <button onClick={isLoad ? null : this.handlerLogin}>{isLoad ? 'Подождите' : 'Login'}</button>
        {errorLogin && errorMsg}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isLogin: state.isLogin,
    errorLogin: state.errorLogin,
    errorMsg: state.errorMsg,
    isLoad: state.isLoad
  };
};
const mapDispatchToProps = dispatch => {
  return {
    statusLogin: (username, password) => setLogin(dispatch, username, password)
  };
};
Login.propTypes = {
  statusLogin: PropTypes.func.isRequired,
  isLogin: PropTypes.bool.isRequired,
  errorLogin: PropTypes.bool.isRequired,
  isLoad: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
