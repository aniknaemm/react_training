import React, { Component } from 'react';

export default class Login extends Component {
  render() {
    return (
    <div className="loginForm">
    Login
    <h2>Авторизация</h2>
    <input type="text" placeholder="login" />
    <input type="pasword" placeholder="pasword" />
    <button>Login</button>
    <button>отмена</button>
    </div>)
  }
}