import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader";

const ProfileInfo=(props)=>{
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <img className = {classes.image} src='https://www.hdwallpaperspulse.com/wp-content/uploads/2018/01/19/blue-sea-natural-image.jpg'
                alt="sdkfhu"/>
            <div className={classes.description}>
                <div>
                    <img src ={props.profile.photos.large}/>
                    <h1>{props.profile.fullName}</h1>
                    <p>Status: {props.profile.aboutMe}</p>
                </div>
                ava+description
            </div>

        </div>)
}

export default ProfileInfo;