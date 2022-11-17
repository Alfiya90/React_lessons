import React from 'react';
import ProfileInfo from "./profileInfo/ProfileInfo";
import {SuperPostsContainer} from '././posts/PostsContainer'



const Profile =(props) => {
    console.log('Profile')
    return(
        <div>
            <ProfileInfo profile = {props.profile}
                         status = {props.status}
                         updateStatus = {props.updateStatus}
                         isOwner = {props.isOwner}
                         savePhoto = {props.savePhoto}/>
            <SuperPostsContainer />
        </div>)
}

export default Profile;