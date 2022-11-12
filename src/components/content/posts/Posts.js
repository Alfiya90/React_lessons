import classes from './Post.module.css';
import React from "react";
import Post from "./Post";
import {ReduxPostForm} from "./PostForm";



const Posts = ({postData, addPost, updateNewPost, newPostChar, addPostBody }) =>{
    let postElement = postData.map((post)=>(<Post message={post.message} key={post.messageId.toString()}/>));


    let addNewPost = (values) => {
        addPost(values.addPostBody)
    }


    return <div >
                <div>
                    <ReduxPostForm onSubmit = {addNewPost} />
                </div>

                <div className = {classes.post}>
                    {postElement}
                </div>
            </div>

}

export default Posts;
