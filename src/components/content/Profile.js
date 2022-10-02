import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import {SuperPostsContainer} from '././posts/PostsContainer'


const Profile =() => {
    debugger
    return(
        <div>
            <ProfileInfo/>
            <SuperPostsContainer />
        </div>)
}

export default Profile;