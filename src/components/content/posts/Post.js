import classes from "./Post.module.css";
import React from "react";

const Post = ({message, deletePost, id, likes}) => {
    return (
        <div className={classes.container}>
            <div className={classes.image}>
                <img src ="https://filestore.community.support.microsoft.com/api/images/f2e55cbf-8316-4d3a-9412-ecd8194b2a72?upload=true"/>
            </div>
            <div className={classes.post}>
                {message}
            </div>
            <a className = {classes.likes}>Like:{likes}</a>
            <button  onClick={() => {deletePost(id)}}>Delete</button>
            <div>

                {/*{item.likes}*/}
            </div>
        </div>)
}

export default Post;