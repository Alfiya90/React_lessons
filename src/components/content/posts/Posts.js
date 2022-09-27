import classes from './Post.module.css';
import React from "react";
import Post from "./Post";



let addPostActionCreater=()=>{
    return {
        type:'ADD_POST'
    }
}

const Posts = ({postData,  newPostChar,  dispatch}) =>{

    let postElement = postData.map((post)=>(<Post item={post} key={post.messageId.toString()}/>))

    let  newPostElement =React.createRef();

    let addingPost =()=>{
        let text = newPostElement.current.value;
        dispatch({type:'ADD_POST'})

    }
    let onPostChange=()=>{
        let text = newPostElement.current.value;
        dispatch({type:'UPDATE_NEW_POST_CHAR', newChar:text})
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
