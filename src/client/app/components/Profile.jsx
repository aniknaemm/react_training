import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router'

import UserInfo from './UserInfo'


class Profile extends Component {

  render() {
    const { isLogin } = this.props;
    return (
      isLogin ? <div className="container">
      <UserInfo />
      </div>
      :<Redirect to ='/login'/>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    isLogin: state.isLogin,
  }
}

export default connect(mapStateToProps, null)(Profile);