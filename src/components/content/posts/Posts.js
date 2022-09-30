import classes from './Post.module.css';
import React from "react";
import Post from "./Post";
import {updateNewPostCharActionCreator, addPostActionCreator} from "../../../dataBase/ProfileReducer";


const Posts = ({postData,  newPostChar,  dispatch}) =>{

    let postElement = postData.map((post)=>(<Post item={post} key={post.messageId.toString()}/>))

    let  newPostElement =React.createRef();

    let addingPost =()=>{
        let text = newPostElement.current.value;
        dispatch(addPostActionCreator())

    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        dispatch(updateNewPostCharActionCreator(text))
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
