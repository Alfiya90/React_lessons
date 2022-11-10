import React, {useEffect} from 'react';
import axios from "axios";
import Profile from "../Profile";
import {getUser, getUserStatus, setUserProfile, updateStatus} from "../../../dataBase/ProfileReducer";
import {connect} from "react-redux";
import {useParams} from "react-router";
import {api} from "../../../api";
import {withAuthRedirectComponent} from "../../hoc/withAuthRedirectComponent";


const SuperProfileContainer = (props) => {
    let params = useParams()
    let userId = params.userId
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = () => {
        props.getUser(userId);
        props.getUserStatus(userId)
        /*api.getUserOne(userId).then(data => {
            props.setUserProfile(data);
        })*/
    }
    return (
        <div>
            <Profile {...props} profile = {props.profile} status = {props.status}
                                updateStatus = {props.updateStatus}/>
        </div>)

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status

})

let withAuthContainer = withAuthRedirectComponent(SuperProfileContainer)

export default connect(mapStateToProps, {setUserProfile,getUser,getUserStatus, updateStatus})(withAuthContainer);