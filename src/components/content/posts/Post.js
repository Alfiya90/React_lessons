import classes from "./Post.module.css";
import React from "react";

const Post = (props) => {
    return (
        <div className={classes.style}>
            {props.message}
            <div>
                <snop> likes</snop>
                {props.likes}
            </div>
        </div>)
}

export default Post;