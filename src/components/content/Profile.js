import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =({addPost, postData, newPostChar, updateNewPostChar}) => {
    return(
        <div>
            <ProfileInfo/>
            <Posts postData={postData} addPost={addPost} newPostChar={newPostChar} updateNewPostChar={updateNewPostChar}/>
        </div>)
}

export default Profile;