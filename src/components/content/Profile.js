import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import {SuperPostsContainer} from '././posts/PostsContainer'



const Profile =(props) => {
    return(
        <div>
            <ProfileInfo profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus}/>
            <SuperPostsContainer />
        </div>)
}

export default Profile;