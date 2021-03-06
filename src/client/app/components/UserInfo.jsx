import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadUserInfo } from '../actions/action';
import List from './List';

class UserInfo extends Component {
  componentDidMount() {
    const { getUserInfo, idUser } = this.props;
    getUserInfo(idUser);
  }
  render() {
    const { userData, isLoad } = this.props;
    return isLoad ? (
      'loading...'
    ) : (
      <div>
        <p>Город</p>
        <p>{userData.city}</p>
        <p>знание языков:</p>
        <ul>
          {userData.languages
            ? userData.languages.map(elem => {
                return <li key={elem}>{elem}</li>;
              })
            : null}
        </ul>
        <p>ссылки :</p>
        <ul>
          {userData.social
            ? userData.social.map(elem => {
                return <List key={elem.label} link={elem.link} label={elem.label} />;
              })
            : null}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    idUser: state.idUser,
    userData: state.userData,
    isLoad: state.isLoad
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: idUser => loadUserInfo(dispatch, idUser)
  };
};

UserInfo.propTypes = {
  idUser: PropTypes.number.isRequired,
  getUserInfo: PropTypes.func.isRequired,
  isLoad: PropTypes.bool.isRequired,
  userData: PropTypes.object
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
