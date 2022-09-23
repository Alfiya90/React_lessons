import classes from './Post.module.css';
import React from "react";
import Post from "./Post";
import PostsOther from "./PostsOther.module.css"
import {addPost} from "./../../../dataBase/DateBase"


let addPostActionCreater=()=>{
    return {
        type:'ADD_POST'
    }
}

const Posts = ({postData, addPost, newPostChar, updateNewPostChar, dispatch}) =>{

    let postElement = postData.map((post)=>(<Post item={post} key={post.messageId.toString()}/>))

    let  newPostElement =React.createRef();

    let addingPost =()=>{
        let text = newPostElement.current.value;
        dispatch({type:'ADD_POST', sendMessage:text})
        /*dispatch({type:'UPDATE_NEW_POST_CHAR', newChar:''})*/
    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        dispatch({type:'UPDATE_NEW_POST_CHAR', newChar:text})
    }


    return <div >
                <div>
                    <div className>
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
