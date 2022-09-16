import React from "react";
import classes from './Profile.module.css';
import Post from "./posts/Posts";
console.log(classes)


const Profile =() => {
    return <div>
        <div>
            <img src='https://www.hdwallpaperspulse.com/wp-content/uploads/2018/01/19/blue-sea-natural-image.jpg'/>
        </div>
        <Post/>
    </div>

}

export default Profile;