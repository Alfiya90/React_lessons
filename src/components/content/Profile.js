import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =({postData, newPostChar, dispatch}) => {
    return(
        <div>
            <ProfileInfo/>
            <Posts postData={postData} dispatch ={dispatch} newPostChar={newPostChar}/>
        </div>)
}

export default Profile;