import classes from './Post.module.css';
import React from "react";
import Post from "./Post";



const Posts = (props) =>{

    let postElement = props.postData.map((post)=>(<Post message ={post.message} likes={post.likes}/>))
    return <div>
                <div className = {classes.post}>
                    {postElement}
                </div>
            </div>

}

export default Posts;
