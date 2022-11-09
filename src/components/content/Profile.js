import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import {SuperPostsContainer} from '././posts/PostsContainer'


const Profile =(props) => {

    return(
        <div>
            <ProfileInfo profile = {props.profile}/>
            <SuperPostsContainer />
        </div>)
}

export default Profile;