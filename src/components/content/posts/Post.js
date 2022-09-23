import classes from "./Post.module.css";
import React from "react";

const Post = ({item}) => {
    return (
        <div className={classes.image}>
            <img src ="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"/>
            {item.message}
            <div>
                <snop> likes</snop>
                {item.likes}
            </div>
        </div>)
}

export default Post;