import classes from './Post.module.css';
import React from "react";
import Post from "./Post";
import PostsOther from "./PostsOther.module.css"



const Posts = (props) =>{

debugger;
    let postElement = props.postData.map((post)=>(<Post message ={post.message} likes={post.likes}/>))

    let  newPostElement =React.createRef();

    let addPost =(props)=>{
        let text = newPostElement.current.value;

        props.addPost(text)}

    return <div className={classes.style}>
                <div>
                    <div className>
                        <textarea ref={newPostElement}></textarea>
                    </div>
                    <div>
                        <button onClick={addPost}>Add</button>
                    </div>
                </div>
                <div className = {classes.post}>
                    {postElement}
                </div>
            </div>

}

export default Posts;
