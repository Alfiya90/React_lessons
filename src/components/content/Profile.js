import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =({addPost, postData}) => {
    return(
        <div>
            <ProfileInfo/>
            <Posts postData={postData}/>
        </div>)
}

export default Profile;