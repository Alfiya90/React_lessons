import React from "react";
import classes from "./ProfileInfo.module.css"

const ProfileInfo=()=>{
    return (
        <div>
            <img src='https://www.hdwallpaperspulse.com/wp-content/uploads/2018/01/19/blue-sea-natural-image.jpg'
                alt="sdkfhu"/>
            <div className={classes.description}>
                ava+description
            </div>
        </div>)
}

export default ProfileInfo;