import React from "react";
import classes from './Profile.module.css';
import Post from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =(props) => {
    return(
        <div>
            <ProfileInfo/>
            <Post postData={props.postData.postData}/>
        </div>)
}

export default Profile;