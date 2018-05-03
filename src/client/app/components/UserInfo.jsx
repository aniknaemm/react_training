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
        console.log(userData);
        console.log(userData.languages);
        console.log(userData.social);
        return (

            isLoad ? 'loading...' : <div >
                <p>{userData.userId}</p>
                <p>{userData.city}</p>

                { (userData.languages) ? userData.languages.map( elem => { return <p key={elem}>{elem}</p>}) : null}
                {(userData.social) ? userData.social.map(elem => {
                    return (
                        <div key={elem.label}>
                            <p>{elem.label}:</p>
                            <a href={elem.link} target="_blank">{elem.link}</a>
                        </div>
                    )
                }) : null
                }
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
