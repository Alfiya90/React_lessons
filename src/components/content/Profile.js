import React from "react";
import classes from './Profile.module.css';
import Post from "./posts/Posts";
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile =(props) => {
    /*let postData=[
        {id:1, message:"Немного обо мне", likes:9 },
        {id:3, message:"Важней всего погода в доме?", likes:8 },
        {id:4, message:"Вкусный завтрак", likes:5},
    ]*/
debugger;
    return(
        <div>
            <ProfileInfo/>
            <Post postData={props.postData}/>
        </div>)
}

export default Profile;