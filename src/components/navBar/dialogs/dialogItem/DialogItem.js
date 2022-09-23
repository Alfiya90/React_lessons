import React from 'react';
import classes from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) =>{
    return(
        <div className={classes.dialog}>
            <div className={classes.ava}>
                <img src ="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"/>
            <NavLink to={"/dialogs/"+props.id}>{props.name}</NavLink>
            </div>
        </div>)
}




export default DialogItem;