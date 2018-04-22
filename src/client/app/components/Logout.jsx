import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setLogin } from '../actions/action';
import { Redirect } from 'react-router';

class Logout extends Component {
  componentDidMount(){
    const { statusLogin } = this.props;
    statusLogin(false);
  }
  render() { 
    return (
      <div>
        <Redirect to='/' />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    statusLogin: () => setLogin(dispatch)
  }
}
export default connect(null,mapDispatchToProps)(Logout);