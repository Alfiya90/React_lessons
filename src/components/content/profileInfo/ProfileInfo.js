import React from "react";
import classes from "./ProfileInfo.module.css"
import {Preloader} from "../../common/Preloader";
import ProfileStatusWithHook from "../posts/ProfileStatusWithHook";
import  userPhoto from '../../../assets/images/user.png'

const ProfileInfo=(props)=>{
  /*  if (!props.isAuth){
        return  <Navigate to = {'/login'}/>
    }  Эта логика вынесена в НОС withAuthContainer (он возвращает контейнерную компоненту со значением isAuth
     и затем оборачивает SuperProfileContainer c  с этим знанием ) */

    let changePhoto = (e) => {
        if(e.target.files.length){
        props.savePhoto(e.target.files[0])
    }}
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div >
            <img className = {classes.image} src='https://www.hdwallpaperspulse.com/wp-content/uploads/2018/01/19/blue-sea-natural-image.jpg'
                alt="sdkfhu"/>
            <div className={classes.description}>
                <div className = {classes.card}>
                    <div>
                        <img className = {classes.userPhoto} src ={props.profile.photos.large || userPhoto}/>
                        <div>
                            { props.isOwner && <input onChange={(e) => {changePhoto(e)}} type = {"file"}/>
                            }
                        </div>
                    </div>

                    <div className = {classes.text}>
                        <a ><b>{props.profile.fullName}:</b> {props.status}</a>
                        <div className={classes.info}>
                            <a><b>Looking for a job: </b>{props.profile.lookingForAJob ? 'yes' : 'no'} </a>
                            {props.profile.lookingForAJob &&
                                <a><b>My professional skills: </b>{props.profile.lookingForAJobDescription}</a>
                            }
                            <div><b>Contacts: </b>{Object.keys(props.profile.contacts).map(key =>
                                                    {return <Contacts  contactTitle = {key}
                                                                      contactValue = {props.profile.contacts[key]}/>})}</div>
                        </div>
                    </div>
                </div>

                <div>
                    <ProfileStatusWithHook status = {props.status}
                                           updateStatus = {props.updateStatus}
                                           isOwner = {props.isOwner}/>
                </div>
            </div>

        </div>)
}

const Contacts = ({contactTitle, contactValue}) => {
    return <div>
        <a className = {classes.contacts}><b>{contactTitle}: </b>{contactValue} </a>
    </div>
}

export default ProfileInfo;