import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUserInfo } from '../actions/action'

class UserInfo extends Component {
    componentDidMount() {
        const { getUserInfo, idUser } = this.props;
        getUserInfo(idUser);
    }
    render() {
        const { userData, isLoad } = this.props;
        return (

            isLoad ? 'loading...' : <div >
                <p>Город</p>
                <p>{userData.city}</p>
                <p>знане языков:</p>
                <ul>
                    { (userData.languages) ? userData.languages.map( elem => { return <li key={elem}>{elem}</li>}) : null}
                </ul>
                <p>ссылки :</p>
                <ul>
                    {(userData.social) ? userData.social.map(elem => {
                        return (
                            <li key={elem.label}>
                                <a href={elem.link} target="_blank">{elem.link}</a>
                            </li> 
                        )
                    }) : null
                    }
                 </ul>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        idUser: state.idUser,
        userData: state.userData,
        isLoad: state.isLoad,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfo: (idUser) => loadUserInfo(dispatch, idUser),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
