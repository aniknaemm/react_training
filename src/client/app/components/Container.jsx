import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from './Main.jsx';
import News from './News.jsx';
import Test from './Test.jsx';
import Profile from './Profile.jsx';
import { ConnectedRouter } from 'react-router-redux';
class Container extends Component {
  render() {
    const { history } = this.props;
    return (
      <ConnectedRouter history={history}>
        <div className="container">
          <Route exact path='/' component={Main} />
          <Route path='/news' component={News} />
          <Route path='/profile' component={Profile} />
        </div>
      </ConnectedRouter>
        )
      }
    }
function mapStateToProps(state, ownProps) {
  // ownProps -то что передано в компенент в ручную
  return {
          isLogin: state.isLogon,
    }
  }
  
export default connect(mapStateToProps)(Container);