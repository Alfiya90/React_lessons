import React from "react";
import classes from './Profile.module.css';
import Posts from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =({addPost, postData,dispatch, newPostChar, updateNewPostChar}) => {
    return(
        <div>
            <ProfileInfo/>
            <Posts postData={postData} dispatch ={dispatch}
                  /* addPost={addPost} newPostChar={newPostChar} updateNewPostChar={updateNewPostChar}*/
            />
        </div>)
}

export default Profile;