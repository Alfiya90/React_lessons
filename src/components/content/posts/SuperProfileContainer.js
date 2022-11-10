import React, {useEffect} from 'react';
import axios from "axios";
import Profile from "../Profile";
import {getUser, setUserProfile} from "../../../dataBase/ProfileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {api} from "../../../api";


const SuperProfileContainer = (props) => {
    let params = useParams()
    let userId = params.userId
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        props.getUser(userId)
        /*api.getUserOne(userId).then(data => {
            props.setUserProfile(data);
        })*/
    }
    return (
        <div>
            <Profile {...props} profile = {props.profile}/>
        </div>)

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile

})

export default connect(mapStateToProps, {setUserProfile,getUser})(SuperProfileContainer);