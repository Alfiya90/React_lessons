import classes from './Post.module.css';
import React from "react";
import Post from "./Post";



const Posts = ({postData, addPost, updateNewPost, newPostChar}) =>{
debugger
    let postElement = postData.map((post)=>(<Post message={post.message} key={post.messageId.toString()}/>));

    let  newPostElement =React.createRef();

    let addingPost =()=>{
        let text = newPostElement.current.value;
        addPost();

    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        updateNewPost(text)
    }


    return <div >
                <div>
                    <div >
                        <textarea onChange={onPostChange} ref={newPostElement} value={newPostChar}></textarea>
                    </div>
                    <div>
                        <button onClick={addingPost}>Add</button>
                    </div>
                </div>
                <div className = {classes.post}>
                    {postElement}
                </div>
            </div>

}

export default Posts;
