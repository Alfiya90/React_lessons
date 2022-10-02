import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./posts/PostsContainer";



const Profile =() => {
    debugger
    return(
        <div>
            <ProfileInfo/>
            <PostsContainer />
        </div>)
}

export default Profile;