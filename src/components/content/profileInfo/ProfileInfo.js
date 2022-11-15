import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader";
import {Navigate} from "react-router";
import ProfileStatus from "./ProfileStatus";
import {api} from "../../../api";

const ProfileInfo=(props)=>{
  /*  if (!props.isAuth){
        return  <Navigate to = {'/login'}/>
    }  Эта логика вынесена в НОС withAuthContainer (он возвращает контейнерную конпоненту со значение isAuth
     и затем оборачивает SuperProfileContainer c  с этим знанием ) */

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
                    <p>Status: {props.status}</p>
                </div>
                <div>
                    <ProfileStatus status = {'Hello'} status = {props.status} updateStatus = {props.updateStatus}/>
                </div>
            </div>

        </div>)
}

export default ProfileInfo;