
import React from "react";
import {updateNewPostCharActionCreator, addPostActionCreator} from "../../../dataBase/ProfileReducer";
import Posts from './Posts'

const PostsContainer = ({postData,  newPostChar,  dispatch}) =>{
    debugger
    let addingPostText =()=>{
        dispatch(addPostActionCreator())
        dispatch(updateNewPostCharActionCreator(''))

    }
    let onPostTextChange=(text)=>{
        dispatch(updateNewPostCharActionCreator(text))
    }


    return <Posts updateNewPost={onPostTextChange} addPost ={addingPostText} postData={postData} newPostChar={newPostChar }/>
}
export default PostsContainer;
