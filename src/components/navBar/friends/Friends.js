import React from "react";
import classes from "./friends.module.css"
const Friends = (props) => {
    return(

        <div className={classes.friendAva}>

                {props.dialogData.dialogData[0].name}

        </div>


    )

}
export default Friends;