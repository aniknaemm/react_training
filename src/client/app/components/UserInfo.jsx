import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadUserInfo } from '../actions/action'
import List from './List'

class UserInfo extends Component {
    componentDidMount() {
        const { getUserInfo, idUser } = this.props;
        getUserInfo(idUser);
    }
    render() {
        const { userData, isLoad } = this.props;
        const firstItem = 'web';
        return (

            isLoad ? 'loading...' : <div >
                <p>Город</p>
                <p>{userData.city}</p>
                <p>знание языков:</p>
                <ul>
                    { (userData.languages) ? userData.languages.map( elem => { return <li key={elem}>{elem}</li>}) : null}
                </ul>
                <p>ссылки :</p>
                <ul>
                    {
                        (userData.social) ? userData.social.filter(elem => {
                            return (
                               elem.label === firstItem 
                            )
                        }).map( elem => {
                             return (
                            <List key = {elem.label} link = {elem.link} label = {elem.label}/>
                        ) }) : null
                    }
                    {(userData.social) ? userData.social.filter(elem => {
                        return (
                             elem.label !== firstItem
                     )
                    }).map(elem => {
                        return (
                            <List key = {elem.label} link = {elem.link} label = {elem.label}/>
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
