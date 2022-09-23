import classes from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.style}>
            <img src ="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"/>
            {props.message}
            <div>
                <snop> likes</snop>
                {props.likes}
            </div>
        </div>)
}

export default Post;